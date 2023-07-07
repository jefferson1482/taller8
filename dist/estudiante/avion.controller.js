"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvionController = void 0;
const common_1 = require("@nestjs/common");
const avion_service_1 = require("./avion.service");
const create_avion_dto_1 = require("./dto/create-avion.dto");
const update_avion_dto_1 = require("./dto/update-avion.dto");
let AvionController = class AvionController {
    constructor(AvionService) {
        this.AvionService = AvionService;
    }
    create(createEstudianteDto) {
        return this.AvionService.create(createEstudianteDto);
    }
    findAll() {
        return this.AvionService.findAll();
    }
    findOne(id) {
        return this.AvionService.findOne(id);
    }
    update(id, updateEstudianteDto) {
        return this.AvionService.update(+id, updateEstudianteDto);
    }
    remove(id) {
        return this.AvionService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_avion_dto_1.CreateAvionDto]),
    __metadata("design:returntype", void 0)
], AvionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AvionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AvionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_avion_dto_1.UpdateAvionDto]),
    __metadata("design:returntype", void 0)
], AvionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AvionController.prototype, "remove", null);
AvionController = __decorate([
    (0, common_1.Controller)('estudiante'),
    __metadata("design:paramtypes", [avion_service_1.AvionService])
], AvionController);
exports.AvionController = AvionController;
//# sourceMappingURL=avion.controller.js.map