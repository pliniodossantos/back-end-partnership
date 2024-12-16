import { Console } from "console";
import AppError from "../../../shared/errors/AppError";
import { consultantsRepositories } from "../../consultants/infra/database/respositories/ConsultantsRepositories";
import { storeRepositories } from "../../stores/infra/database/repositories/StoresRepositories";
import { Order } from "../infra/database/entities/Order";
import { orderRepositories } from "../infra/database/repositories/OrdersRepositories";
import { IListOrders } from "../models/IListOrders";
import { IListOrdersCustomer } from "../models/IListOrdersCustomer";




export default class ListCustomerOrdersService {
    async execute({id}: IListOrders): Promise<IListOrdersCustomer[]> {
        const customersOrders =  await orderRepositories.findByCustomer(id);
       
        let cust: IListOrdersCustomer[] = []
        if (!customersOrders) {
            throw new AppError('Pontos não encontrados')
        }     
        for (let index = 0; index < customersOrders.length; index++) {
        let consu = await consultantsRepositories.findById(customersOrders[index].consultant_id)
        let store = await storeRepositories.findById(customersOrders[index].store_id)
         cust.push({id:customersOrders[index].id, consulant:consu?.name || "",store:store?.name || "", obs:customersOrders[index].obs, expires: customersOrders[index].expires_at, points:customersOrders[index].points_customer, pending:customersOrders[index].pending})

            
        }
        return cust;
}
}