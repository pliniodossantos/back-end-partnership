import { Request, Response } from "express";
import DeleteOrderService from "../../../../../orders/services/DeleteOrderService";
import ListOrdersService from "../../../../../orders/services/ListOrdersService";

export default class AdmOrdersControllers {

async delete (request: Request, response: Response): Promise <Response>{
    const id= Number(request.params.id);
    const deleteOrderService = new DeleteOrderService();
    await deleteOrderService.execute({id});
    return response.status(204).send();
}

async index(request: Request, response: Response): Promise<Response>{
    const listOrdersService = new ListOrdersService();
    const orders = await listOrdersService.execute();
    return response.json(orders);
}
}