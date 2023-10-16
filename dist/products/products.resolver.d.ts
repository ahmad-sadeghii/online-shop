import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
export declare class ProductsResolver {
    private readonly productsService;
    constructor(productsService: ProductsService);
    createProduct(createProductInput: CreateProductInput): string;
    findAll(): Product[];
    findOne(id: number): Product;
    updateProduct(updateProductInput: UpdateProductInput): string;
    removeProduct(id: number): string;
}
