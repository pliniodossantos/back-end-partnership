import { Request, Response } from "express";
import ListStoreOrdersService from "../../../../../orders/services/ListStoreOrdersService";

export default class AdmListStoreOrdersControllers {
async show(request: Request, response: Response): Promise<Response>{
    const id = Number(request.body.id);
    const listStoreOrdersService = new ListStoreOrdersService();
    const StoreOrders = await listStoreOrdersService.execute({id});
    return response.json(StoreOrders);

}
}