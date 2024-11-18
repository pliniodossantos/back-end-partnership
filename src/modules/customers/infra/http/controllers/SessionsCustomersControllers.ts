import { Request, Response } from "express";
import SessionCustomerService from "../../../services/SessionCustomerService";

export default class SessionsCustomerControllers {
    async Create(request: Request, response: Response): Promise <Response>{
        const {cpfOrCnpj, password} = request.body;
        const createSession = new SessionCustomerService();

        const customerAndToken = await createSession.execute(
            {
                cpfOrCnpj,
                password
            }
        );
        return response.json(customerAndToken);
    }
}