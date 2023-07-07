import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAvionDto {
    @IsString()
    @IsNotEmpty()
    descripcion:string;

    @IsString()
    @IsNotEmpty()
    npasajeros:string;

    
}
