import { CategoriesService } from './categories.service';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
export declare class CategoriesResolver {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    createCategory(createCategoryInput: CreateCategoryInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateCategory(updateCategoryInput: UpdateCategoryInput): string;
    removeCategory(id: number): string;
}
