import {InputType, Field, Float, Int} from '@nestjs/graphql';
import {CreateProductCategoryInput} from "../../product-categories/dto/create-product-category.input";
import {CreateSupplierInput} from "../../suppliers/dto/create-supplier.input";

@InputType()
export class CreateProductInput {
  @Field()
  Name: string;

  @Field()
  Description: string;

  @Field(() => Float)
  Price: number;

  @Field(() => Float)
  Weight: number;

  @Field(() => Int)
  CategoryId: number;

  @Field(() => Int)
  SupplierId: number;

  @Field()
  ImageUrl: string;
}
