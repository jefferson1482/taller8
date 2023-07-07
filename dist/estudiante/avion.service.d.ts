import { CreateAvionDto } from './dto/create-avion.dto';
import { UpdateAvionDto } from './dto/update-avion.dto';
import { Avion } from './entities/avion.entity';
export declare class AvionService {
    private avion;
    create(CreateAvionDto: CreateAvionDto): Avion;
    findAll(): Avion[];
    findOne(id: number): Avion;
    update(id: number, updateAvionDto: UpdateAvionDto): Avion;
    remove(id: number): void;
}
