import { CreateAvionDto } from './create-avion.dto';
declare const UpdateAvionDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAvionDto>>;
export declare class UpdateAvionDto extends UpdateAvionDto_base {
    estado?: boolean;
}
export {};
