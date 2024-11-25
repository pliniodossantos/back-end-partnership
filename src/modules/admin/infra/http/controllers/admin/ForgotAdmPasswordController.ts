import { Request, Response } from "express";
import SendForgotAdmPasswordEmailService from "../../../../services/SendForgotAdmPasswordEmailService";



export default class ForgotAdmPasswordController{
    async create(request: Request, response: Response): Promise <Response>{
        const {email} = request.body;
        const sendForgotAdmPasswordEmailService = new SendForgotAdmPasswordEmailService();
        await sendForgotAdmPasswordEmailService.execute({email});
        return response.status(204).json();
    }
}