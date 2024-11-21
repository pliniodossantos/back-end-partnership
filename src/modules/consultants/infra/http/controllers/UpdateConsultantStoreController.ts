import { Request, Response } from "express";
import UpdateConsultantStoreService from "../../../services/UpdateConsultantStoreService";




export default class UpdateConsultantStoreController{
    async update(request:Request, response:Response): Promise <Response>{
        const id = Number(request.params.id);
        const {cnpjStore} = request.body;
        const updateConsultantStoreService = new UpdateConsultantStoreService();

        await updateConsultantStoreService.execute({
            id,
            cnpjStore
        })

        return response.status(204).json();
    }
}