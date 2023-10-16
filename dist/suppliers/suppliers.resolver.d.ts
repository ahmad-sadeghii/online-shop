import { SuppliersService } from './suppliers.service';
import { CreateSupplierInput } from './dto/create-supplier.input';
import { UpdateSupplierInput } from './dto/update-supplier.input';
export declare class SuppliersResolver {
    private readonly suppliersService;
    constructor(suppliersService: SuppliersService);
    createSupplier(createSupplierInput: CreateSupplierInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateSupplier(updateSupplierInput: UpdateSupplierInput): string;
    removeSupplier(id: number): string;
}
