import { ProductCategoriesService } from './product-categories.service';
import { CreateProductCategoryInput } from './dto/create-product-category.input';
import { UpdateProductCategoryInput } from './dto/update-product-category.input';
export declare class ProductCategoriesResolver {
    private readonly productCategoriesService;
    constructor(productCategoriesService: ProductCategoriesService);
    createProductCategory(createProductCategoryInput: CreateProductCategoryInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateProductCategory(updateProductCategoryInput: UpdateProductCategoryInput): string;
    removeProductCategory(id: number): string;
}
