import { Request, Response } from "express";
import ListCustomerOrdersService from "../../../../../orders/services/ListCustomerOrdersService";



export default class AdmListCustomerOrdersControllers {
async show(request: Request, response: Response): Promise<Response>{
    const id = Number(request.body.id);
    const listCustomerOrdersService = new ListCustomerOrdersService();
    const customerOrders = await listCustomerOrdersService.execute({id});
    return response.json(customerOrders);
}
}