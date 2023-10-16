import { Injectable } from '@nestjs/common';
import { CreateProductCategoryInput } from './dto/create-product-category.input';
import {ProductCategory} from "./entities/product-category.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class ProductCategoriesService {
  constructor(
      @InjectRepository(ProductCategory)
      private productCategoriesRepository: Repository<ProductCategory>
  ) {}

  async create(createProductCategoryInput: CreateProductCategoryInput) {
    const newCat = new ProductCategory();
    newCat.Name = createProductCategoryInput.Name;
    newCat.Description = createProductCategoryInput.Description;
    await this.productCategoriesRepository.save(newCat);
    return newCat;
  }

  async findAll() {
    return this.productCategoriesRepository.find();
  }

  async findOne(Id: number) {
    return this.productCategoriesRepository.findOneBy({ Id });
  }
}
