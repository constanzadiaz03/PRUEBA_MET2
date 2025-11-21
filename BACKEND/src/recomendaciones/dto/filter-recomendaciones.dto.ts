import { IsOptional, IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class FilterRecomendacionesDto {
  @IsOptional()
  @IsString()
  categoria?: string; // categoria del servicio: alojamiento, tour, comida, etc.

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  maxPrecio?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  lat?: number; // si pasan lat/lng se filtrará por proximidad

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  lng?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  distanciaKm?: number; // radio en km para filtrar por cercanía

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  top?: number; // cuántas recomendaciones devolver (default 5)
}
