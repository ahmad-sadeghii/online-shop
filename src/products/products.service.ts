import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import {Product} from "./entities/product.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ProductCategory} from "../product-categories/entities/product-category.entity";
import {Supplier} from "../suppliers/entities/supplier.entity";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(ProductCategory)
    private categoriesRepository : Repository<ProductCategory>,
    @InjectRepository(Supplier)
    private suppliersRepository : Repository<Supplier>
  ) {}
  async create(createProductInput: CreateProductInput) {
    const Category = await this.categoriesRepository.findOneBy({Id: createProductInput.CategoryId});
    const Supplier = await this.suppliersRepository.findOneBy({Id: createProductInput.SupplierId});

    if (!Category) {
      throw new Error(`Category with ID ${createProductInput.CategoryId} not found`);
    }

    if (!Supplier) {
      throw new Error(`Supplier with ID ${createProductInput.SupplierId} not found`);
    }

    const product = new Product();
    product.Name = createProductInput.Name;
    product.Description = createProductInput.Description;
    product.Price = createProductInput.Price;
    product.Weight = createProductInput.Weight;
    product.ImageUrl = createProductInput.ImageUrl;
    product.Category = Category;
    product.Supplier = Supplier;
    await this.productsRepository.save(product);
    return product;
  }

  async findAllInCategory(CategoryId: number) {
    const Category = await this.categoriesRepository.findOneBy({Id: CategoryId});
    return this.productsRepository.find({
      where: {
        Category: { Id: CategoryId }
      }
    });
  }

  findOne(Id: number) {
    return this.productsRepository.findOneBy({Id});
  }

  async update(id: number, updateProductInput: UpdateProductInput) {
    const { Id, ...updateData } = updateProductInput;

    const product = await this.productsRepository.findOneBy({ Id });

    if (!product) {
      throw new Error(`Product with ID ${Id} not found`);
    }

    // Check if CategoryId exists
    if (updateData.CategoryId) {
      const category = await this.categoriesRepository.findOneBy({ Id: updateData.CategoryId });
      if (!category) {
        throw new Error(`Category with ID ${updateData.CategoryId} not found`);
      }
    }

    // Check if SupplierId exists
    if (updateData.SupplierId) {
      const supplier = await this.suppliersRepository.findOneBy({ Id: updateData.SupplierId });
      if (!supplier) {
        throw new Error(`Supplier with ID ${updateData.SupplierId} not found`);
      }
    }

    // Update the product with the provided data
    Object.assign(product, updateData);

    // Save the updated product
    await this.productsRepository.save(product);

    return product;
  }

  async remove(Id: number) {
    const product = await this.productsRepository.findOneBy({ Id });

    if (!product) {
      throw new Error(`Product with ID ${Id} not found`);
    }

    await this.productsRepository.remove(product)
    return true;
  }
}
