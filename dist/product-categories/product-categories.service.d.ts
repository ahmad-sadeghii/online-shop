import { CreateProductCategoryInput } from './dto/create-product-category.input';
import { UpdateProductCategoryInput } from './dto/update-product-category.input';
export declare class ProductCategoriesService {
    create(createProductCategoryInput: CreateProductCategoryInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProductCategoryInput: UpdateProductCategoryInput): string;
    remove(id: number): string;
}
