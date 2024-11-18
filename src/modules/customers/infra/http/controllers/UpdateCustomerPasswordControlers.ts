import { Request, Response } from "express";
import UpdateCustomerPasswordService from "../../../services/UpdateCustomerPasswordService";


export default class UpdateCustomerPasswordControlers {
    
    async create(request: Request, response: Response): Promise <Response>{
        const id = Number(request.params.id);
        const {oldPassword, newPassword} = request.body;
        const updatePassword = new UpdateCustomerPasswordService();

        await updatePassword.reset({
            id,
            oldPassword,
            newPassword
        })

        return response.status(204).json();

    }
}