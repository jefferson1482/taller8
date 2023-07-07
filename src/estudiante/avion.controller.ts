import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AvionService } from './avion.service';
import { CreateAvionDto } from './dto/create-avion.dto';
import { UpdateAvionDto } from './dto/update-avion.dto';
import { Avion } from './entities/avion.entity';

@Controller('estudiante')
export class AvionController {
  constructor(private readonly AvionService: AvionService) {}

  @Post()
  create(@Body() createEstudianteDto: CreateAvionDto) {
    return this.AvionService.create(createEstudianteDto);
  }

  @Get()
  findAll() : Avion[] {
    return this.AvionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.AvionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstudianteDto: UpdateAvionDto) {
    return this.AvionService.update(+id, updateEstudianteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.AvionService.remove(+id);
  }
}
