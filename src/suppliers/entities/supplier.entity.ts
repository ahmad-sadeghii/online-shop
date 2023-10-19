import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@ObjectType()
@Entity({ name: 'supplier' })
export class Supplier {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  Id: number;

  @Field()
  @Column()
  Name: string;
}
