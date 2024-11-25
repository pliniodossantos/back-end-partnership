import { Request, Response } from "express";
import CreateOrderService from "../../../../../orders/services/CreateOrderService";

export default class AdmCreateOrdersControllers {
async create (request: Request, response: Response): Promise <Response>{
    const consulant_id = Number(request.body.id);
    const {customerCpfOrCnpj, points_customer, obs} = request.body;
    const createOrderService = new CreateOrderService();
    const order = await createOrderService.execute({
        consulant_id,
        customerCpfOrCnpj,
        points_customer,
        obs
    });
    return response.json(order);

}


}