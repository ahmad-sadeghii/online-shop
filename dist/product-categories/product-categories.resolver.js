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
exports.ProductCategoriesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const product_categories_service_1 = require("./product-categories.service");
const product_category_entity_1 = require("./entities/product-category.entity");
const create_product_category_input_1 = require("./dto/create-product-category.input");
const update_product_category_input_1 = require("./dto/update-product-category.input");
let ProductCategoriesResolver = class ProductCategoriesResolver {
    constructor(productCategoriesService) {
        this.productCategoriesService = productCategoriesService;
    }
    createProductCategory(createProductCategoryInput) {
        return this.productCategoriesService.create(createProductCategoryInput);
    }
    findAll() {
        return this.productCategoriesService.findAll();
    }
    findOne(id) {
        return this.productCategoriesService.findOne(id);
    }
    updateProductCategory(updateProductCategoryInput) {
        return this.productCategoriesService.update(updateProductCategoryInput.id, updateProductCategoryInput);
    }
    removeProductCategory(id) {
        return this.productCategoriesService.remove(id);
    }
};
exports.ProductCategoriesResolver = ProductCategoriesResolver;
__decorate([
    (0, graphql_1.Mutation)(() => product_category_entity_1.ProductCategory),
    __param(0, (0, graphql_1.Args)('createProductCategoryInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_category_input_1.CreateProductCategoryInput]),
    __metadata("design:returntype", void 0)
], ProductCategoriesResolver.prototype, "createProductCategory", null);
__decorate([
    (0, graphql_1.Query)(() => [product_category_entity_1.ProductCategory], { name: 'productCategories' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductCategoriesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => product_category_entity_1.ProductCategory, { name: 'productCategory' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProductCategoriesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_category_entity_1.ProductCategory),
    __param(0, (0, graphql_1.Args)('updateProductCategoryInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_product_category_input_1.UpdateProductCategoryInput]),
    __metadata("design:returntype", void 0)
], ProductCategoriesResolver.prototype, "updateProductCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_category_entity_1.ProductCategory),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProductCategoriesResolver.prototype, "removeProductCategory", null);
exports.ProductCategoriesResolver = ProductCategoriesResolver = __decorate([
    (0, graphql_1.Resolver)(() => product_category_entity_1.ProductCategory),
    __metadata("design:paramtypes", [product_categories_service_1.ProductCategoriesService])
], ProductCategoriesResolver);
//# sourceMappingURL=product-categories.resolver.js.map