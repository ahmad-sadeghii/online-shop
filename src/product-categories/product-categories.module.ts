import { Module } from '@nestjs/common';
import { ProductCategoriesService } from './product-categories.service';
import { ProductCategoriesResolver } from './product-categories.resolver';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProductCategory} from "./entities/product-category.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ProductCategory])],
  providers: [ProductCategoriesResolver, ProductCategoriesService],
})
export class ProductCategoriesModule {}
