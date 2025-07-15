import {
  IsEmail,
  IsInt,
  IsPositive,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateEmpleadoDto {
  @IsString()
  @MinLength(1)
  fullName: string;

  @IsInt()
  @IsPositive()
  @Min(1)
  age: number;

  @IsString()
  @MinLength(1)
  role: string;

  @IsString()
  @MinLength(1)
  @IsEmail()
  email: string;
}

