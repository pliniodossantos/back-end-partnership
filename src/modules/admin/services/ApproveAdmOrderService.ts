import AppError from "../../../shared/errors/AppError";
import { Order } from "../../orders/infra/database/entities/Order";
import { orderRepositories } from "../../orders/infra/database/repositories/OrdersRepositories";
import { IApproveOrder } from "../models/IApproveOrder";


export default class ApproveAdmOrderService {
    async execute({id, pending}: IApproveOrder): Promise<Order> {
        const order = await orderRepositories.findById(id);
        if (!order) {
            throw new AppError("Pontos não econtrados", 404)
        }
        order.pending = pending,
    
        await orderRepositories.save(order);
        return order;
    }
}