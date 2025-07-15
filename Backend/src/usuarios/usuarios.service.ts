import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { isValidObjectId, Model } from 'mongoose';
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
      const user = await this.usuarioModel.create(createUsuarioDto);

      return user;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(
        `no se pudo crear el usuario falta el campo ${JSON.stringify(error.keyValue)}`,
      );
    }
  }

  async findAll(): Promise<Usuario[]> {
    const user = await this.usuarioModel.find().lean();
    return user;
  }

  async findOne(term: string) {
    let usuario: Usuario | null = null;
    // por id de mongo
    if (!usuario && isValidObjectId(term)) {
      usuario = await this.usuarioModel.findById(term);
    }

    // por FullName
    if (!usuario) {
      usuario = await this.usuarioModel.findOne({
        fullName: term,
      });
    }

    if (!usuario) {
      throw new BadRequestException(
        `user with id,fullname or age ${term} not found`,
      );
    }
    return usuario;
  }

  async update(term: string, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.findOne(term);

    try {
      await usuario.updateOne(updateUsuarioDto);

      return { ...usuario.toJSON(), ...updateUsuarioDto };
    } catch (error) {
      console.log(error);
    }
    return;
  }

  async remove(id: string) {
    const { deletedCount } = await this.usuarioModel.deleteOne({ _id: id });
    if (deletedCount === 0) {
      throw new BadRequestException(`user with ID ${id} not found `);
    }
    return;
  }
}
