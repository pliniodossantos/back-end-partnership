import AppError from "../../../shared/errors/AppError";
import { orderRepositories } from "../infra/database/repositories/OrdersRepositories";
import { IDeleteOrder } from "../models/IDeleteOrder";




export default class DeleteOrderService {
    async execute ({id}: IDeleteOrder): Promise<void>{
        const order = await orderRepositories.findById(id);
       
        if (!order) {
            throw new AppError('Pontuação não encontrada', 404);
        }

        await orderRepositories.remove(order);
    }
}