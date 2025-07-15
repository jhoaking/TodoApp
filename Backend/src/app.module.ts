import { Module } from '@nestjs/common';
import { EmpleadosModule } from './empleados/empleados.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [

    MongooseModule.forRoot('mongodb://localhost:27017/todo-app'),

    EmpleadosModule,
     UsuariosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
