import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { isValidObjectId, Model } from 'mongoose';
import { Empleado } from './entities/empleado.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EmpleadosService {
  constructor(
    @InjectModel(Empleado.name)
    private readonly empleadoModel: Model<Empleado>,
  ) {}

  async create(createEmpleadoDto: CreateEmpleadoDto) {
    try {
      const empleado = await this.empleadoModel.create(createEmpleadoDto);
      return empleado;
    } catch (error) {
      throw new BadRequestException(
        `no se pudo crear el usuario falta el campo ${JSON.stringify(error.keyValue)}`,
      );
    }
  }

  async findAll(): Promise<Empleado[]> {
    const empleado = await this.empleadoModel.find().lean();
    return empleado;
  }

  async findOne(term: string) {
    let empleado: Empleado | null = null;

    if (!empleado && isValidObjectId(term)) {
      empleado = await this.empleadoModel.findById(term);
    }

    if (!empleado) {
      empleado = await this.empleadoModel.findOne({
        $or: [{ email: term }, { fullName: term }, { rol: term }],
      });
    }

    if (!empleado) {
      throw new BadRequestException(
        `user with id,fullname or age ${term} not found`,
      );
    }
    return empleado;
  }

  async update(term: string, updateEmpleadoDto: UpdateEmpleadoDto) {
    const empleado = await this.findOne(term);

    try {
      await empleado.updateOne(updateEmpleadoDto);
    } catch (error) {}
  }

  async remove(id: string) {
    const { deletedCount } = await this.empleadoModel.deleteOne({ _id: id });
    if (deletedCount === 0) {
      throw new BadRequestException(`user with ID ${id} not found `);
    }
    return;
  }
}
