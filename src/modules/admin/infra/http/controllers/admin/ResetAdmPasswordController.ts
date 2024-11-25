import { Request, Response } from "express";
import ResetAdmPasswordService from "../../../../services/ResetAdmPasswordService";



export default class ResetAdmPasswordController{
    async create(request: Request, response: Response): Promise <Response> {
        
        const { password, token} = request.body;

        const resetPassword = new ResetAdmPasswordService();

        await resetPassword.execute({
            password,
            token,
        });

        return response.status(204).json();
    }
}