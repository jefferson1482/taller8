"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvionService = void 0;
const common_1 = require("@nestjs/common");
const avion_entity_1 = require("./entities/avion.entity");
let AvionService = class AvionService {
    constructor() {
        this.avion = [
            { id: 1, descripcion: '1', npasajeros: '34' },
            { id: 2, descripcion: '2', npasajeros: '55656' },
        ];
    }
    create(CreateAvionDto) {
        const avion = new avion_entity_1.Avion();
        avion.id = Math.max(...this.avion.map(elemento => elemento.id), 0) + 1;
        avion.descripcion = CreateAvionDto.descripcion;
        avion.npasajeros = CreateAvionDto.npasajeros;
        this.avion.push(avion);
        return avion;
    }
    findAll() {
        return this.avion;
    }
    findOne(id) {
        const avion = this.avion.find(avion => avion.id === id);
        if (!avion)
            throw new common_1.NotFoundException(`ID ${id} not found`);
        return avion;
    }
    update(id, updateAvionDto) {
        const { descripcion } = updateAvionDto;
        const { npasajeros } = updateAvionDto;
        const avion = this.findOne(id);
        if (descripcion)
            avion.descripcion = descripcion;
        this.avion = this.avion.map(elemento => {
            if (elemento.id === id)
                return avion;
            return elemento;
        });
        return avion;
    }
    remove(id) {
        this.findOne(id);
        this.avion = this.avion.filter(elemento => elemento.id !== id);
    }
};
AvionService = __decorate([
    (0, common_1.Injectable)()
], AvionService);
exports.AvionService = AvionService;
//# sourceMappingURL=avion.service.js.map