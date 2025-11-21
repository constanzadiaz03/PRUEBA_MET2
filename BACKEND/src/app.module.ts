import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,              // HACE DISPONIBLE ConfigService EN TODA LA APP
      envFilePath: '.env',         // ARCHIVO .env EN LA RAÍZ DEL BACKEND
    }),

    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/tu_db'),

    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
