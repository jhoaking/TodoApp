import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {  Document } from "mongoose";


@Schema()
export class Usuario extends Document {
    @Prop()
    fullName : string;

    @Prop()
    age : number;

    @Prop({
        unique : true,
        index : true
    })
    rol : string;

}



export const usuarioSchema = SchemaFactory.createForClass(Usuario)

