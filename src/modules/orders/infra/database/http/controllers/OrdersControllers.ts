import { Request, Response } from "express";
import CreateOrderService from "../../../../services/CreateOrderService";
import DeleteOrderService from "../../../../services/DeleteOrderService";

export default class OrdersControllers {

async create (request: Request, response: Response): Promise <Response>{
    const consulant_id = Number(request.params.id);
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
async delete (request: Request, response: Response): Promise <Response>{
    const id= Number(request.params.id);
    const deleteOrderService = new DeleteOrderService();
    await deleteOrderService.execute({id});
    return response.status(204).send();
}

}