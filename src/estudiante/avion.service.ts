import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAvionDto } from './dto/create-avion.dto';
import { UpdateAvionDto } from './dto/update-avion.dto';
import { Avion } from './entities/avion.entity';

@Injectable()
export class AvionService {

  private avion: Avion[]=[
    {id:1, descripcion:'1', npasajeros: '34' },
    {id:2, descripcion:'2', npasajeros: '55656' },
  ]

  create(CreateAvionDto: CreateAvionDto) {
    const avion = new Avion();
    avion.id=  Math.max( ... this.avion.map(elemento => elemento.id),0 )+1 ;
    avion.descripcion= CreateAvionDto.descripcion;
    avion.npasajeros= CreateAvionDto.npasajeros;
    this.avion.push(avion);
    return avion;
  }

  findAll() : Avion[] {
    return this.avion;
  }

  findOne(id: number) {
    //const avion =  this.avion.find(this.avion => this.avion.id===id);
    const avion =  this.avion.find(avion => avion.id===id);
    if (!avion) throw new NotFoundException(`ID ${id} not found`)
    return avion;
  }

  update(id: number, updateAvionDto: UpdateAvionDto) {
    const { descripcion  } = updateAvionDto;
    const { npasajeros  } = updateAvionDto;
    const avion = this.findOne(id);
    if (descripcion) avion.descripcion= descripcion;
    

    this.avion =  this.avion.map( elemento=> {
      if (elemento.id===id) return avion;
      return elemento;
    } )

    return avion;

  }

  remove(id: number) {
    this.findOne(id);
    this.avion =  this.avion.filter(elemento=> elemento.id!== id);
  }
}
