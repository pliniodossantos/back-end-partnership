import { Request, response, Response } from "express";
import ResetCustomerPasswordService from "../../../services/ResetCustomerPasswordService";


export default class ResetCustomerPasswordController{
    async create(request: Request, response: Response): Promise <Response> {
        
        const { password, token} = request.body;

        const resetPassword = new ResetCustomerPasswordService();

        await resetPassword.execute({
            password,
            token,
        });

        return response.status(204).json();
    }
}