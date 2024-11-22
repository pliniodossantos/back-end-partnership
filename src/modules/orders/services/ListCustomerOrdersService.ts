import AppError from "../../../shared/errors/AppError";
import { Order } from "../infra/database/entities/Order";
import { orderRepositories } from "../infra/database/repositories/OrdersRepositories";
import { IListOrders } from "../models/IListOrders";




export default class ListCustomerOrdersService {
    async execute({id}: IListOrders): Promise<Order[]> {
        const customersOrders =  await orderRepositories.findByCustomer(id);
        if (!customersOrders) {
            throw new AppError('Pontos não encontrados')
        }
        return customersOrders;
}
}