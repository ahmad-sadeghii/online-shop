import {ObjectType, Field, Int, Float} from '@nestjs/graphql';
import {Supplier} from "../../suppliers/entities/supplier.entity";
import {ProductCategory} from "../../product-categories/entities/product-category.entity";
import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {type} from "os";

@ObjectType()
@Entity({ name: 'product' })
export class Product {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  Id: number;

  @Field()
  @Column()
  Name: string;

  @Field()
  @Column()
  Description: string;

  @Field(() => Float)
  @Column("decimal")
  Price: number;

  @Field(() => Float)
  @Column("decimal")
  Weight?: number;

  @Field(() => ProductCategory)
  @ManyToOne(() => ProductCategory, {eager: true})
  @JoinColumn({ name: 'CategoryId' })
  Category: ProductCategory

  @Field(() => Supplier)
  @ManyToOne(() => Supplier, {eager: true})
  @JoinColumn({ name: 'SupplierId' })
  Supplier: Supplier

  @Field()
  @Column()
  ImageUrl: string;
}
