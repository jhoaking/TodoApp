import { Module } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { EmpleadosController } from './empleados.controller';
import { Empleado, empleadoSchema } from './entities/empleado.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [EmpleadosController],
  providers: [EmpleadosService],
  imports: [
      MongooseModule.forFeature([
        {
          name: Empleado.name,
          schema: empleadoSchema,
        },
      ]),
    ],
    exports: [MongooseModule],
})
export class EmpleadosModule {}
