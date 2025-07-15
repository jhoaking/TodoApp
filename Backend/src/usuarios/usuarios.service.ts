import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name)
    private readonly usuarioModel: Model<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {      
      const user = await this.usuarioModel.create(createUsuarioDto)
      
      return user;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(
        `no se pudo crear el usuario falta el campo ${JSON.stringify(error.keyValue)}`,
      );
    }
  }

  findAll() {
    return `This action returns all usuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
