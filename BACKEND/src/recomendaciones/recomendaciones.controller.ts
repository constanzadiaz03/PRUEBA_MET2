import { Controller, Get, Query } from '@nestjs/common';
import { RecomendacionesService } from './recomendaciones.service';
import { FilterRecomendacionesDto } from './dto/filter-recomendaciones.dto';
import { ValidationPipe, UsePipes } from '@nestjs/common';

@Controller('recomendaciones')
export class RecomendacionesController {
  constructor(private readonly recomendacionesService: RecomendacionesService) {}

  /**
   * GET /recomendaciones
   * Query params admitidos:
   *  - categoria (string)
   *  - maxPrecio (number)
   *  - lat (number) & lng (number) & distanciaKm (number)  <-- para filtrar por cercanía
   *  - top (number)
   *
   * Ejemplo: /recomendaciones?categoria=tour&maxPrecio=30000&lat=-33.45&lng=-70.66&distanciaKm=5&top=10
   */
  @Get()
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  obtener(@Query() filters: FilterRecomendacionesDto) {
    return this.recomendacionesService.obtenerRecomendaciones(filters);
  }
}
