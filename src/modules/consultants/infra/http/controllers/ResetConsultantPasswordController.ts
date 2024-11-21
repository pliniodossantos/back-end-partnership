import { Request, Response } from "express";
import ResetConsultantPasswordService from "../../../services/ResetConsultantPasswordService";



export default class ResetConsultantPasswordController{
    async create(request: Request, response: Response): Promise <Response> {
        
        const { password, token} = request.body;

        const resetPassword = new ResetConsultantPasswordService();

        await resetPassword.execute({
            password,
            token,
        });

        return response.status(204).json();
    }
}