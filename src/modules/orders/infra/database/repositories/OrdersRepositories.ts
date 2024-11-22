import { AppDataSource } from "../../../../../shared/infra/typeorm/data-source";
import { Order } from "../entities/Order";


export const orderRepositories = AppDataSource.getRepository(Order).extend({
    async findById(id: number): Promise<Order | null> {
        return this.findOneBy({id});
    },
    async findByCustomer(customer_id: number): Promise<Order[] | null> {
        return this.findBy({customer_id});
    },
    async findByStore(store_id: number): Promise<Order[] | null> {
        return this.findBy({store_id});
    },
    async findByConsulant(consultant_id: number): Promise<Order[] | null> {
        return this.findBy({consultant_id});
    },
})