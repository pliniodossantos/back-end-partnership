import AppError from "../../../shared/errors/AppError";
import { consultantsRepositories } from "../../consultants/infra/database/respositories/ConsultantsRepositories";
import { customerRepositories } from "../../customers/infra/database/repositories/CustomersRepositories";
import { storeRepositories } from "../../stores/infra/database/repositories/StoresRepositories";
import { Order } from "../infra/database/entities/Order";
import { orderRepositories } from "../infra/database/repositories/OrdersRepositories";
import { IListOrdersadmin } from "../models/IListOrdersadmin";

export default class ListOrdersService {
    async execute(): Promise<IListOrdersadmin[]> {
        const orders =  await orderRepositories.find();
        let ord: IListOrdersadmin[] = []     
         if (!orders) {
                    throw new AppError('Pontos não encontrados')
                }
            for (let index = 0; index < orders.length; index++) {
                    let customer = await customerRepositories.findById(orders[index].customer_id)
                    let store = await storeRepositories.findById(orders[index].store_id)
                    let consulant = await consultantsRepositories.findById(orders[index].store_id)
                    ord.push({ id: orders[index].id, consulant:consulant?.name || "", customer: customer?.name || "", store: store?.name || "", obs: orders[index].obs, expires: orders[index].expires_at, pointsCustomer: orders[index].points_customer, pointsConsulant: orders[index].points_consulant, pending: orders[index].pending })
        
        
                }


        return ord;
}
}