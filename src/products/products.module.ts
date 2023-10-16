import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Product} from "./entities/product.entity";
import {ProductCategory} from "../product-categories/entities/product-category.entity";
import {Supplier} from "../suppliers/entities/supplier.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductCategory, Supplier])],
  providers: [ProductsResolver, ProductsService],
})
export class ProductsModule {}
