import AppError from "../../../shared/errors/AppError";
import { customerRepositories } from "../../customers/infra/database/repositories/CustomersRepositories";
import { storeRepositories } from "../../stores/infra/database/repositories/StoresRepositories";
import { Order } from "../infra/database/entities/Order";
import { orderRepositories } from "../infra/database/repositories/OrdersRepositories";
import { IListOrders } from "../models/IListOrders";
import { IListOrdersConsulant } from "../models/IListOrdersConsulant";




export default class ListConsulantOrdersService {
    async execute({ id }: IListOrders): Promise<IListOrdersConsulant[]> {
        const consulantOrders = await orderRepositories.findByConsulant(id);
        let consu: IListOrdersConsulant[] = []
        if (!consulantOrders) {
            throw new AppError('Pontos não encontrados')
        }

        for (let index = 0; index < consulantOrders.length; index++) {
            let customer = await customerRepositories.findById(consulantOrders[index].customer_id)
            let store = await storeRepositories.findById(consulantOrders[index].store_id)
            consu.push({ id: consulantOrders[index].id, customer: customer?.name || "", store: store?.name || "", obs: consulantOrders[index].obs, expires: consulantOrders[index].expires_at, points: consulantOrders[index].points_consulant, pending: consulantOrders[index].pending })


        }
        return consu;

    }
}