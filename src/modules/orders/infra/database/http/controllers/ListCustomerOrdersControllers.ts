import { Request, Response } from "express";
import ListCustomerOrdersService from "../../../../services/ListCustomerOrdersService";


export default class ListCustomerOrdersControllers {
async show(request: Request, response: Response): Promise<Response>{
    const id = Number(request.params.id);
    const listCustomerOrdersService = new ListCustomerOrdersService();
    const customerOrders = await listCustomerOrdersService.execute({id});
    return response.json(customerOrders);
}
}