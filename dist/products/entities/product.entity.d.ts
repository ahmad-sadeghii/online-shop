import { Supplier } from "../../suppliers/entities/supplier.entity";
import { ProductCategory } from "../../product-categories/entities/product-category.entity";
export declare class Product {
    Id: number;
    Name: string;
    Description: string;
    Price: number;
    Weight: number;
    Category: ProductCategory;
    Supplier: Supplier;
    ImageUrl: string;
}
