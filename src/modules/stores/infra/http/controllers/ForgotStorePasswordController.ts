import { Request, Response } from "express";
import SendForgotStorePasswordEmailService from "../../../services/SendForgotStorePasswordEmailService";


export default class ForgotStorePasswordController{
    async create(request: Request, response: Response): Promise <Response>{
        const {email} = request.body;

        const sendForgotStorePasswordEmailService = new SendForgotStorePasswordEmailService();

        await sendForgotStorePasswordEmailService.execute({email});

        return response.status(204).json();
    }
}