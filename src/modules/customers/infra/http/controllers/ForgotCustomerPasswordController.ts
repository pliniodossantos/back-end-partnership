import { Request, Response } from "express";
import SendForgotCustomerPasswordEmailService from "../../../services/SendForgotCustomerPasswordEmailService";


export default class ForgotCustomerPasswordController{
    async create(request: Request, response: Response): Promise <Response>{
        const {email} = request.body;

        const sendForgotCustomerPasswordEmailService = new SendForgotCustomerPasswordEmailService();

        await sendForgotCustomerPasswordEmailService.execute({email});

        return response.status(204).json();
    }
}