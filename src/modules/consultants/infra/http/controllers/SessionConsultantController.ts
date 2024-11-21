import { Request, Response } from "express";
import SessionConsultantService from "../../../services/SessionConsultantService";



export default class SessionConsultantController {
    async Create(request: Request, response: Response): Promise <Response>{
        const {cpf, password} = request.body;
        const createSession = new SessionConsultantService();

        const consultantAndToken = await createSession.execute(
            {
                cpf,
                password
            }
        );
        return response.json(consultantAndToken);
    }
}