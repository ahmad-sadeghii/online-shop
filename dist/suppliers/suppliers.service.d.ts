import { CreateSupplierInput } from './dto/create-supplier.input';
import { UpdateSupplierInput } from './dto/update-supplier.input';
export declare class SuppliersService {
    create(createSupplierInput: CreateSupplierInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSupplierInput: UpdateSupplierInput): string;
    remove(id: number): string;
}
