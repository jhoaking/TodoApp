import {IsInt, IsPositive, IsString, Min, MinLength} from 'class-validator'



export class CreateUsuarioDto {

    @IsString()
    @MinLength(1)
    fullName : string;


    @IsInt()
    @IsPositive()
    @Min(1)
    age : number;

    @IsString()
    @MinLength(1)
    rol : string


}
