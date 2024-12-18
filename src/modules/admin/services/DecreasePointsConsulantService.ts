import AppError from "../../../shared/errors/AppError";
import { consultantsRepositories } from "../../consultants/infra/database/respositories/ConsultantsRepositories";
import { customerRepositories } from "../../customers/infra/database/repositories/CustomersRepositories";
import { Order } from "../../orders/infra/database/entities/Order";
import { orderRepositories } from "../../orders/infra/database/repositories/OrdersRepositories";
import { storeRepositories } from "../../stores/infra/database/repositories/StoresRepositories";
import { ICreateDecreasePointsConsulant } from "../models/ICreateDecreasePointsConsulant";



export default class DecreasePointsConsulantService{
    async execute({consulantCpf, points_consulant}: ICreateDecreasePointsConsulant): Promise<Order>{
        const customerExists = await customerRepositories.findByCPFOrCnpj("1")
        if (!customerExists) {
            throw new AppError('Profissional não encontrado');
        }
        const storeExists = await storeRepositories.findByCnpj('1')
        if (!storeExists) {
            throw new AppError('Loja não encontrada');
        }
        const consulantExists = await consultantsRepositories.findByCpf(consulantCpf);
        if (!consulantExists) {
            throw new AppError('Consultor não encontrado');
        }
        const customer_id = customerExists.id;


        const today = new Date();
       


        const order = orderRepositories.create({
            consultant_id: consulantExists.id,
            store_id: storeExists.id,
            customer_id,
            pending:true,
            points_customer:0,
            points_consulant: points_consulant,
            expires_at: '2099-12-31' ,
            obs:"Pontos já utilizados"
        });
        
        orderRepositories.save(order);

        return order;    

    }

}