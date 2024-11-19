import { Request, Response } from "express";
import UpdateStoreStateService from "../../../services/UpdateStoreStateService";


export default class UpdateStoreStateController{
    async update(request:Request, response:Response): Promise <Response>{
        const id = Number(request.params.id);
        const {active} = request.body;
        const updateStoreStateService = new UpdateStoreStateService();

        await updateStoreStateService.execute({
            id,
            active
        })

        return response.status(204).json();
    }
}