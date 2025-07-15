import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id.pipe';

@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadosService) {}

  @Post()
  create(@Body() createEmpleadoDto: CreateEmpleadoDto) {
    return this.empleadosService.create(createEmpleadoDto);
  }

  @Get()
  findAll() {
    return this.empleadosService.findAll();
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.empleadosService.findOne(term);
  }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updateEmpleadoDto: UpdateEmpleadoDto) {
    return this.empleadosService.update(term, updateEmpleadoDto);
  }

  @Delete(':id')
  remove(@Param('id' , ParseMongoIdPipe) id: string) {
    return this.empleadosService.remove(id);
  }
}
