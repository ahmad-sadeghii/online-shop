import { CreateProductInput } from './create-product.input';
import {InputType, Field, Int, PartialType, Float} from '@nestjs/graphql';

@InputType()
export class UpdateProductInput {
  @Field(() => Int)
  Id: number;

  @Field({ nullable: true })
  Name: string;

  @Field({ nullable: true })
  Description: string;

  @Field(() => Float, { nullable: true })
  Price: number;

  @Field(() => Float, { nullable: true })
  Weight: number;

  @Field(() => Int, { nullable: true })
  CategoryId: number;

  @Field(() => Int, { nullable: true })
  SupplierId: number;

  @Field({ nullable: true })
  ImageUrl: string;
}
