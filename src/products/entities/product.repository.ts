import {EntityRepository, Repository} from "typeorm";
import {Product} from "./product.entity";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
    findByIdx(id: number) {
        console.log(`Finding product ID ${id}`)
        return this.createQueryBuilder("product")
            .where("Id = :id", {id})
            .getOne();
    }
}