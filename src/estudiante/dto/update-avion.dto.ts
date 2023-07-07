import { PartialType } from '@nestjs/mapped-types';
import { CreateAvionDto } from './create-avion.dto';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateAvionDto extends PartialType(CreateAvionDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
