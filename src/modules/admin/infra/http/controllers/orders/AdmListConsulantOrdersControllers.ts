import { Request, Response } from "express";
import ListConsulantOrdersService from "../../../../../orders/services/ListConsulantOrdersService";


export default class AdmListConsulantOrdersControllers {
async show(request: Request, response: Response): Promise<Response>{
    const id = Number(request.body.id);
    const listConsulantOrdersService = new ListConsulantOrdersService();
    const consulantOrders = await listConsulantOrdersService.execute({id});
    return response.json(consulantOrders);

}
}