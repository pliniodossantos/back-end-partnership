import AppError from "../../../shared/errors/AppError";
import { Order } from "../infra/database/entities/Order";
import { orderRepositories } from "../infra/database/repositories/OrdersRepositories";
import { IListOrders } from "../models/IListOrders";




export default class ListConsulantOrdersService {
    async execute({id}: IListOrders): Promise<Order[]> {
        const consulantOrders =  await orderRepositories.findByConsulant(id);
        if (!consulantOrders) {
            throw new AppError('Pontos não encontrados')
        }
        return consulantOrders;
}
}