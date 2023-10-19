import { Module } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { SuppliersResolver } from './suppliers.resolver';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Supplier} from "./entities/supplier.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Supplier])],
  providers: [SuppliersResolver, SuppliersService],
})
export class SuppliersModule {}
