import { Request, Response } from "express";
import ApproveAdmOrderService from "../../../../services/ApproveAdmOrderService";



export default class ApproveAdmcontroller{
    async update(request:Request, response:Response): Promise <Response>{
        const id = Number(request.body.id);
        const {pending} = request.body;
        const approveAdmOrderService = new ApproveAdmOrderService();

        await approveAdmOrderService.execute({
            id,
            pending
        })

        return response.status(204).json();
    }
}