import { Request, Response } from "express";
import ListStoreService from "../../../services/ListStoreService";
import ShowStoreService from "../../../services/ShowStoreService";
import CreateStoreService from "../../../services/CreateStoreService";
import UpdateStoreService from "../../../services/UpdateStoreService";
import DeleteStoreService from "../../../services/DeleteStoreService";


export default class StoresControllers {

    async index(request: Request, response: Response): Promise<Response>{
        const listStoreService = new ListStoreService();
        const stores = await listStoreService.execute();
        return response.json(stores);
    }


    async show(request: Request, response: Response): Promise<Response>{
        const id = Number(request.params.id);
        const showStoreService = new ShowStoreService();
        const store = await showStoreService.execute({id});
        return response.json(store);

    }

    async create (request: Request, response: Response): Promise <Response>{
        const {name, email, cnpj, password, active ,birthday,} = request.body;
        const createStoreService = new CreateStoreService();
        const store = await createStoreService.execute({
            name,
            email,
            cnpj,
            password,
            active,
            birthday,
        });
        return response.json(store);

    }

    async update (request: Request, response: Response): Promise <Response>{
        const id= Number(request.params.id);
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
        const id= Number(request.params.id);
        const deleteStoreService = new DeleteStoreService();
        await deleteStoreService.execute({id});
        return response.status(204).send([]);
    }

}