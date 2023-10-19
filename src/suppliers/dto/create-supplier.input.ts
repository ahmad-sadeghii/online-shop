import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSupplierInput {
  @Field(() => String, { description: 'Supplier name' })
  Name: string;
}
