import { Module } from '@nestjs/common';
import { RecomendacionesService } from './recomendaciones.service';
import { RecomendacionesController } from './recomendaciones.controller';

// Importa los módulos que proveen los datos
import { ServiciosModule } from '../servicios/servicios.module';
import { EstablecimientosModule } from '../establecimientos/establecimientos.module';

@Module({
  imports: [
    ServiciosModule,
    EstablecimientosModule,
  ],
  controllers: [RecomendacionesController],
  providers: [RecomendacionesService],
})
export class RecomendacionesModule {}
