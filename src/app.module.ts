import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductCategoriesModule } from './product-categories/product-categories.module';
import { ProductsModule } from './products/products.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {GraphQLModule} from "@nestjs/graphql";
import { TypeOrmModule } from '@nestjs/typeorm';
import {Product} from "./products/entities/product.entity";
import {ProductCategory} from "./product-categories/entities/product-category.entity";
import {Supplier} from "./suppliers/entities/supplier.entity";
import 'dotenv/config';

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }), ProductsModule, SuppliersModule, ProductCategoriesModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: DB_HOST,
      port: parseInt(DB_PORT),
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_DATABASE,
      entities: [Product, Supplier, ProductCategory],
      synchronize: true,
    })
  ],
  // imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
