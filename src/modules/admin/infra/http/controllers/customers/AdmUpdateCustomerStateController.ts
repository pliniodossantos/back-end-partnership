import { Request, Response } from "express";
import UpdateCustomerStateService from "../../../../../customers/services/UpdateCustomerStateService";


export default class AdmUpdateCustomerStateController{
    async update(request:Request, response:Response): Promise <Response>{
        const id = Number(request.body.id);
        const {active} = request.body;
        const updateCustomerStateService = new UpdateCustomerStateService();

        await updateCustomerStateService.execute({
            id,
            active
        })

        return response.status(204).json();
    }
}