import AppError from "../../../shared/errors/AppError";
import { consultantsRepositories } from "../../consultants/infra/database/respositories/ConsultantsRepositories";
import { customerRepositories } from "../../customers/infra/database/repositories/CustomersRepositories";
import { Order } from "../infra/database/entities/Order";
import { orderRepositories } from "../infra/database/repositories/OrdersRepositories";
import { IListOrders } from "../models/IListOrders";
import { IListOrdersStore } from "../models/IListOrdersStore";




export default class ListStoreOrdersService {
    async execute({id}: IListOrders): Promise<IListOrdersStore[]> {
        const storeOrders =  await orderRepositories.findByStore(id);
        let stor: IListOrdersStore[] = []
        if (!storeOrders) {
            throw new AppError('Pontos não encontrados')
        }
        for (let index = 0; index < storeOrders.length; index++) {
        let consu = await consultantsRepositories.findById(storeOrders[index].consultant_id)
        let customer = await customerRepositories.findById(storeOrders[index].customer_id)
        stor.push({id:storeOrders[index].id, consulant:consu?.name || "",customer:customer?.name || "", obs:storeOrders[index].obs, expires: storeOrders[index].expires_at, points:storeOrders[index].points_customer, pending:storeOrders[index].pending})

            
        }
        return stor;


}
}