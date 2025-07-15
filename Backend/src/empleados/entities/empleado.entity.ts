import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Empleado extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  email: string;

  @Prop()
  fullName: string;

  @Prop({
    unique: true,
    index: true,
  })
  role: string;

  @Prop()
  age: number;
}

export const empleadoSchema = SchemaFactory.createForClass(Empleado)
