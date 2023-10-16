import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from "./entities/product.entity";
export declare class ProductsService {
    create(createProductInput: CreateProductInput): string;
    findAll(): Product[];
    findOne(id: number): Product;
    update(id: number, updateProductInput: UpdateProductInput): string;
    remove(id: number): string;
}
