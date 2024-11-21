import { Request, Response } from "express";
import UpdateConsultantPasswordService from "../../../services/UpdateConsultantPasswordService";


export default class UpdateConsultantPasswordController {
    
    async create(request: Request, response: Response): Promise <Response>{
        const id = Number(request.params.id);
        const {oldPassword, newPassword} = request.body;
        const updatePassword = new UpdateConsultantPasswordService();

        await updatePassword.reset({
            id,
            oldPassword,
            newPassword
        })

        return response.status(204).json();

    }
}