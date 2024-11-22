import AppError from "../../../shared/errors/AppError";
import { addMonths } from "../../../shared/utils/set18month";
import { consultantsRepositories } from "../../consultants/infra/database/respositories/ConsultantsRepositories";
import { customerRepositories } from "../../customers/infra/database/repositories/CustomersRepositories";
import { storeRepositories } from "../../stores/infra/database/repositories/StoresRepositories";
import { Order } from "../infra/database/entities/Order";
import { orderRepositories } from "../infra/database/repositories/OrdersRepositories";
import { ICreateOrder } from "../models/ICreateOrder";



export default class CreateOrderService{
    async execute({consulant_id, customerCpfOrCnpj, points_customer,obs }: ICreateOrder): Promise<Order>{
        const consulantExists = await consultantsRepositories.findById(consulant_id)
        if (!consulantExists) {
            throw new AppError('Consultor não encontrado');
        }
        const storeExists = await storeRepositories.findById(consulantExists.store_id)
        if (!storeExists) {
            throw new AppError('Loja não encontrada');
        }
        const customerExists = await customerRepositories.findByCPFOrCnpj(customerCpfOrCnpj);
        if (!customerExists) {
            throw new AppError('Profissional não encontrado');
        }
        const customer_id = customerExists.id;


        const today = new Date();
        const newDate = addMonths(today, 18);
       


        const order = orderRepositories.create({
            consultant_id: consulantExists.id,
            store_id: consulantExists.store_id,
            customer_id,
            pending:true,
            points_customer,
            points_consulant:Math.floor(points_customer /2),
            expires_at: newDate ,
            obs
        });
        
        orderRepositories.save(order);

        return order;    

    }

}