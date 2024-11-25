import { Request, Response } from "express";
import UpdateAdmPasswordService from "../../../../services/UpdateAdmPasswordService";

export default class UpdateAdmPasswordControlers {
    
    async create(request: Request, response: Response): Promise <Response>{
        const id = Number(request.params.id);
        const {oldPassword, newPassword} = request.body;
        const updatePassword = new UpdateAdmPasswordService();

        await updatePassword.reset({
            id,
            oldPassword,
            newPassword
        })

        return response.status(204).json();

    }
}