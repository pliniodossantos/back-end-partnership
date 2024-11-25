import { Order } from "../infra/database/entities/Order";
import { orderRepositories } from "../infra/database/repositories/OrdersRepositories";

export default class ListOrdersService {
    async execute(): Promise<Order[]> {
        const orders =  await orderRepositories.find();
        return orders;
}
}