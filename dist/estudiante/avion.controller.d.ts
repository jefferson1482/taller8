import { AvionService } from './avion.service';
import { CreateAvionDto } from './dto/create-avion.dto';
import { UpdateAvionDto } from './dto/update-avion.dto';
import { Avion } from './entities/avion.entity';
export declare class AvionController {
    private readonly AvionService;
    constructor(AvionService: AvionService);
    create(createEstudianteDto: CreateAvionDto): Avion;
    findAll(): Avion[];
    findOne(id: number): Avion;
    update(id: string, updateEstudianteDto: UpdateAvionDto): Avion;
    remove(id: string): void;
}
