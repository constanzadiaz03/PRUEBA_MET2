import { Injectable } from '@nestjs/common';
import { ServiciosService } from '../servicios/servicios.service';
import { EstablecimientosService } from '../establecimientos/establecimientos.service';
import { FilterRecomendacionesDto } from './dto/filter-recomendaciones.dto';

// helper: calcular distancia Haversine (km)
function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const toRad = (v: number) => (v * Math.PI) / 180;
  const R = 6371; // Earth radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

@Injectable()
export class RecomendacionesService {
  constructor(
    private readonly serviciosService: ServiciosService,
    private readonly establecimientosService: EstablecimientosService,
  ) {}

  /**
   * Regla básica de recomendaciones:
   *  - obtiene servicios (colección "servicios") aplicando filtros básicos
   *  - obtiene establecimientos asociados si se requiere filtrado por ubicación
   *  - ordena por precio ascendente (más barato primero)
   *  - si existen ratings/score, pondera por rating (no obligatorio)
   *  - devuelve top N
   */
  async obtenerRecomendaciones(filters: FilterRecomendacionesDto) {
    const topN = filters.top && filters.top > 0 ? Math.floor(filters.top) : 5;

    // 1) Buscar servicios con filtros de categoria y precio
    const servicioFilters: any = {};
    if (filters.categoria) servicioFilters.categoria = filters.categoria;
    // Nota: el método findWithFilters en ServiciosService acepta nombre/categoria/ubicacion
    const servicios = await this.serviciosService.findWithFilters(servicioFilters);

    // 2) Mapear a un formato unificado
    let recomendaciones = servicios.map(s => ({
      tipo: 'servicio',
      id: s._id,
      nombre: s.nombre,
      categoria: s.categoria,
      descripcion: s.descripcion,
      ubicacion: (s as any).ubicacion, // puede ser string o lat/lng según tu modelo
      precio: (s as any).precio ?? null,
      rating: (s as any).rating ?? null, // si el schema tiene rating
      fuente: 'servicios',
      raw: s,
    }));

    // 3) Si se pidió filtro por ubicación, filtrar por establecimientos que tengan coordenadas
    if (filters.lat != null && filters.lng != null && filters.distanciaKm != null) {
      const lat = filters.lat;
      const lng = filters.lng;
      const radio = filters.distanciaKm;

      // Buscar establecimientos dentro del radio (usamos el servicio de establecimientos)
      // asumimos que findAll devuelve los establecimientos con campo ubicacion.lat/ubicacion.lng
      const establecimientos = await this.establecimientosService.findAll();

      const cercanos = establecimientos
        .filter((e: any) => e.ubicacion && e.ubicacion.lat != null && e.ubicacion.lng != null)
        .map((e: any) => {
          const d = haversineKm(lat, lng, e.ubicacion.lat, e.ubicacion.lng);
          return { establecimiento: e, distanciaKm: d };
        })
        .filter((x: any) => x.distanciaKm <= radio)
        .map((x: any) => x.establecimiento);

      // Convertir establecimientos a recomendaciones (si tienen precios de servicios)
      const estabRecs = [];
      for (const e of cercanos) {
        if (Array.isArray(e.precios)) {
          for (const p of e.precios) {
            // si se filtró por categoria, intentar ignorar si no coincide (opcional)
            estabRecs.push({
              tipo: 'establecimiento',
              id: e._id,
              nombre: e.nombre,
              categoria: e.tipo,
              servicio: p.servicio,
              descripcion: e.descripcion,
              ubicacion: e.ubicacion,
              precio: p.valor,
              rating: (e as any).rating ?? null,
              fuente: 'establecimientos',
              raw: e,
            });
          }
        } else {
          // si no tiene precios, se devuelve sin precio
          estabRecs.push({
            tipo: 'establecimiento',
            id: e._id,
            nombre: e.nombre,
            categoria: e.tipo,
            descripcion: e.descripcion,
            ubicacion: e.ubicacion,
            precio: null,
            rating: (e as any).rating ?? null,
            fuente: 'establecimientos',
            raw: e,
          });
        }
      }

      // Combinar recomendaciones (servicios + establecimientos cercanos)
      recomendaciones = recomendaciones.concat(estabRecs);
    }

    // 4) Aplicar filtro por maxPrecio si existe
    if (filters.maxPrecio != null) {
      recomendaciones = recomendaciones.filter(r => r.precio == null || r.precio <= filters.maxPrecio);
      // se permiten also recomendaciones sin precio (para mostrar alternativas)
    }

    // 5) Ordenamiento: por precio ascendente, pero si hay rating, priorizar rating
    recomendaciones.sort((a: any, b: any) => {
      const aHasPrice = a.precio != null;
      const bHasPrice = b.precio != null;

      // Si ambos tienen rating, ordenar por una combinación rating(desc) y precio(asc)
      const aRating = typeof a.rating === 'number' ? a.rating : null;
      const bRating = typeof b.rating === 'number' ? b.rating : null;

      if (aRating != null && bRating != null) {
        // mayor rating primero; en empate, menor precio primero
        if (bRating !== aRating) return bRating - aRating;
        if (aHasPrice && bHasPrice) return a.precio - b.precio;
        if (aHasPrice) return -1;
        if (bHasPrice) return 1;
        return 0;
      }

      // Si ninguno tiene rating, ordenar por precio si ambos tienen precio
      if (aHasPrice && bHasPrice) return a.precio - b.precio;
      if (aHasPrice) return -1;
      if (bHasPrice) return 1;
      return 0;
    });

    // 6) Quitar duplicados por id+servicio (simple)
    const seen = new Set();
    const deduped = [];
    for (const r of recomendaciones) {
      const key = `${r.id}_${r.servicio ?? 'NOSERV'}`;
      if (!seen.has(key)) {
        seen.add(key);
        deduped.push(r);
      }
    }

    // 7) Devolver topN
    return deduped.slice(0, topN);
  }
}
