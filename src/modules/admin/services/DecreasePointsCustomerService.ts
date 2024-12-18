import AppError from "../../../shared/errors/AppError";
import { consultantsRepositories } from "../../consultants/infra/database/respositories/ConsultantsRepositories";
import { customerRepositories } from "../../customers/infra/database/repositories/CustomersRepositories";
import { Order } from "../../orders/infra/database/entities/Order";
import { orderRepositories } from "../../orders/infra/database/repositories/OrdersRepositories";
import { storeRepositories } from "../../stores/infra/database/repositories/StoresRepositories";
import { ICreateDecreasePointsCustomer } from "../models/ICreateDecreasePointsCustomer";



export default class DecreasePointsCustomerService{
    async execute({customerCpfOrCnpj, points_customer}: ICreateDecreasePointsCustomer): Promise<Order>{
        const consulantExists = await consultantsRepositories.findByCpf("1")
        if (!consulantExists) {
            throw new AppError('Consultor não encontrado');
        }
        const storeExists = await storeRepositories.findByCnpj('1')
        if (!storeExists) {
            throw new AppError('Loja não encontrada');
        }
        const customerExists = await customerRepositories.findByCPFOrCnpj(customerCpfOrCnpj);
        if (!customerExists) {
            throw new AppError('Profissional não encontrado');
        }
        const customer_id = customerExists.id;


        const today = new Date();
       


        const order = orderRepositories.create({
            consultant_id: consulantExists.id,
            store_id: consulantExists.store_id,
            customer_id,
            pending:true,
            points_customer,
            points_consulant: 0,
            expires_at: '2099-12-31' ,
            obs:"Pontos já utilizados"
        });
        
        orderRepositories.save(order);

        return order;    

    }

}