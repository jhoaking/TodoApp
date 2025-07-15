import { Module } from '@nestjs/common';
import { EmpleadosModule } from './empleados/empleados.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import {MongooseModule} from '@nestjs/mongoose'
import { CommonModule } from './common/common.module';

@Module({
  imports: [

    MongooseModule.forRoot('mongodb://localhost:27017/todo-app'),

    EmpleadosModule,
    
     UsuariosModule,
    
     CommonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
