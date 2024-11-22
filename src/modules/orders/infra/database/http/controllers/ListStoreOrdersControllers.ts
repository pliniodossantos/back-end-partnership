import { Request, Response } from "express";
import ListStoreOrdersService from "../../../../services/ListStoreOrdersService";

export default class ListStoreOrdersControllers {
async show(request: Request, response: Response): Promise<Response>{
    const id = Number(request.params.id);
    const listStoreOrdersService = new ListStoreOrdersService();
    const StoreOrders = await listStoreOrdersService.execute({id});
    return response.json(StoreOrders);

}
}