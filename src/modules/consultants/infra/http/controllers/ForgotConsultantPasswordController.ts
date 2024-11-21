import { Request, Response } from "express";
import SendForgotConsultantPasswordEmailService from "../../../services/SendForgotConsultantPasswordEmailService";



export default class ForgotConsultantPasswordController{
    async create(request: Request, response: Response): Promise <Response>{
        const {email} = request.body;

        const sendForgotConsultantPasswordEmailService = new SendForgotConsultantPasswordEmailService();

        await sendForgotConsultantPasswordEmailService.execute({email});

        return response.status(204).json();
    }
}