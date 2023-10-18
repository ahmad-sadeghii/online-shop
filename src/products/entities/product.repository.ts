import {EntityRepository, Repository} from "typeorm";
import {Product} from "./product.entity";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
    findById(id: number) {
        return this.createQueryBuilder("product")
            .where("Id = :id", {id})
            .getOne();
    }
}