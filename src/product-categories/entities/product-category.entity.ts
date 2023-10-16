import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@ObjectType()
@Entity({ name: 'product-category' })
export class ProductCategory {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  Id: number;

  @Field()
  @Column()
  Name: string;

  @Field()
  @Column()
  Description: string;
}
