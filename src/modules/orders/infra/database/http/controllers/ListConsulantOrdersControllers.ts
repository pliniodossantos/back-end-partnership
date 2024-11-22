import { Request, Response } from "express";
import ListConsulantOrdersService from "../../../../services/ListConsulantOrdersService";

export default class ListConsulantOrdersControllers {
async show(request: Request, response: Response): Promise<Response>{
    const id = Number(request.params.id);
    const listConsulantOrdersService = new ListConsulantOrdersService();
    const consulantOrders = await listConsulantOrdersService.execute({id});
    return response.json(consulantOrders);

}
}