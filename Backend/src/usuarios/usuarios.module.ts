import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, usuarioSchema } from './entities/usuario.entity';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Usuario.name,
        schema: usuarioSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class UsuariosModule {}
