import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductCategoryInput {
  @Field(() => String, { description: 'Category name' })
  Name: string;

  @Field(() => String, { description: 'Category description' })
  Description: string;
}
