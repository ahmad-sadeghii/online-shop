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
exports.SuppliersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const suppliers_service_1 = require("./suppliers.service");
const supplier_entity_1 = require("./entities/supplier.entity");
const create_supplier_input_1 = require("./dto/create-supplier.input");
const update_supplier_input_1 = require("./dto/update-supplier.input");
let SuppliersResolver = class SuppliersResolver {
    constructor(suppliersService) {
        this.suppliersService = suppliersService;
    }
    createSupplier(createSupplierInput) {
        return this.suppliersService.create(createSupplierInput);
    }
    findAll() {
        return this.suppliersService.findAll();
    }
    findOne(id) {
        return this.suppliersService.findOne(id);
    }
    updateSupplier(updateSupplierInput) {
        return this.suppliersService.update(updateSupplierInput.id, updateSupplierInput);
    }
    removeSupplier(id) {
        return this.suppliersService.remove(id);
    }
};
exports.SuppliersResolver = SuppliersResolver;
__decorate([
    (0, graphql_1.Mutation)(() => supplier_entity_1.Supplier),
    __param(0, (0, graphql_1.Args)('createSupplierInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_supplier_input_1.CreateSupplierInput]),
    __metadata("design:returntype", void 0)
], SuppliersResolver.prototype, "createSupplier", null);
__decorate([
    (0, graphql_1.Query)(() => [supplier_entity_1.Supplier], { name: 'suppliers' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SuppliersResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => supplier_entity_1.Supplier, { name: 'supplier' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SuppliersResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => supplier_entity_1.Supplier),
    __param(0, (0, graphql_1.Args)('updateSupplierInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_supplier_input_1.UpdateSupplierInput]),
    __metadata("design:returntype", void 0)
], SuppliersResolver.prototype, "updateSupplier", null);
__decorate([
    (0, graphql_1.Mutation)(() => supplier_entity_1.Supplier),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SuppliersResolver.prototype, "removeSupplier", null);
exports.SuppliersResolver = SuppliersResolver = __decorate([
    (0, graphql_1.Resolver)(() => supplier_entity_1.Supplier),
    __metadata("design:paramtypes", [suppliers_service_1.SuppliersService])
], SuppliersResolver);
//# sourceMappingURL=suppliers.resolver.js.map