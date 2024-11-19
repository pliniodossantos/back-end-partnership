import { Request, Response } from "express";
import SessionStoreService from "../../../services/SessionStoreService";


export default class SessionsStoreController {
    async Create(request: Request, response: Response): Promise <Response>{
        const {cnpj, password} = request.body;
        const createSession = new SessionStoreService();

        const storeAndToken = await createSession.execute(
            {
                cnpj,
                password
            }
        );
        return response.json(storeAndToken);
    }
}