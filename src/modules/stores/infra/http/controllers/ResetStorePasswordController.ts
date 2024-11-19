import { Request, Response } from "express";
import ResetStorePasswordService from "../../../services/ResetStorePasswordService";



export default class ResetStorePasswordController{
    async create(request: Request, response: Response): Promise <Response> {
        
        const { password, token} = request.body;

        const resetPassword = new ResetStorePasswordService();

        await resetPassword.execute({
            password,
            token,
        });

        return response.status(204).json();
    }
}