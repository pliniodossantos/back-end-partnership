import { Request, Response } from "express";
import UpdateStorePasswordService from "../../../services/UpdateStorePasswordService";

export default class UpdateStorePasswordControlers {
    
    async create(request: Request, response: Response): Promise <Response>{
        const id = Number(request.params.id);
        const {oldPassword, newPassword} = request.body;
        const updatePassword = new UpdateStorePasswordService();

        await updatePassword.reset({
            id,
            oldPassword,
            newPassword
        })

        return response.status(204).json();

    }
}