import { Request, Response } from "express";
import SessionAdmService from "../../../../services/SessionAdmService";


export default class SessionsAdmControllers {
    async Create(request: Request, response: Response): Promise <Response>{
        const {cpf, password} = request.body;
        const createSession = new SessionAdmService();

        const admAndToken = await createSession.execute(
            {
                cpf,
                password
            }
        );
        return response.json(admAndToken);
    }
}