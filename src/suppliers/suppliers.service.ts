import { Injectable } from '@nestjs/common';
import { CreateSupplierInput } from './dto/create-supplier.input';
import { UpdateSupplierInput } from './dto/update-supplier.input';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Supplier} from "./entities/supplier.entity";

@Injectable()
export class SuppliersService {
  constructor(
      @InjectRepository(Supplier)
      private suppliersRepository: Repository<Supplier>
  ) {}

  async create(createSupplierInput: CreateSupplierInput) {
    const supplier = new Supplier();
    supplier.Name = createSupplierInput.Name;
    await this.suppliersRepository.save(supplier);
    return supplier;
  }
}
