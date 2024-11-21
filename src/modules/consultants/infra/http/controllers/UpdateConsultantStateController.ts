import { Request, Response } from "express";
import UpdateConsultantStateService from "../../../services/UpdateConsultantStateService";



export default class UpdateConsultantStateController{
    async update(request:Request, response:Response): Promise <Response>{
        const id = Number(request.params.id);
        const {active} = request.body;
        const updateConsultantStateService = new UpdateConsultantStateService();

        await updateConsultantStateService.execute({
            id,
            active
        })

        return response.status(204).json();
    }
}