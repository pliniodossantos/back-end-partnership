import AppError from "../../../shared/errors/AppError";
import { Order } from "../infra/database/entities/Order";
import { orderRepositories } from "../infra/database/repositories/OrdersRepositories";
import { IListOrders } from "../models/IListOrders";




export default class ListStoreOrdersService {
    async execute({id}: IListOrders): Promise<Order[]> {
        const storeOrders =  await orderRepositories.findByStore(id);
        if (!storeOrders) {
            throw new AppError('Pontos não encontrados')
        }
        return storeOrders;
}
}