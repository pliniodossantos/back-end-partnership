import { Request, Response } from "express";
import ListStoreService from "../../../../../stores/services/ListStoreService";
import UpdateStoreService from "../../../../../stores/services/UpdateStoreService";
import DeleteStoreService from "../../../../../stores/services/DeleteStoreService";


export default class AdmStoresControllers {

    async index(request: Request, response: Response): Promise<Response>{
        const listStoreService = new ListStoreService();
        const stores = await listStoreService.execute();
        return response.json(stores);
    }

    async update (request: Request, response: Response): Promise <Response>{
        const id= Number(request.body.id);
        const { name, email, cnpj, birthday} = request.body;
        const updateStoreService = new UpdateStoreService();
        const store = await updateStoreService.execute(
            {
                id,
                name,
                email,
                cnpj,
                birthday,
            }
        );
        return response.json(store);
    }

    async delete (request: Request, response: Response): Promise <Response>{
        const id= Number(request.body.id);
        const deleteStoreService = new DeleteStoreService();
        await deleteStoreService.execute({id});
        return response.status(204).send([]);
    }

}