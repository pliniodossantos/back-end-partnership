import { Request, Response } from "express";
import ListCostumerService from "../../../../../customers/services/ListCustomerService";
import UpdateCustomerService from "../../../../../customers/services/UpdateCustomerService";
import DeleteCustomerService from "../../../../../customers/services/DeleteCustomerService";

export default class AdmCustomersControllers {

    async index(request: Request, response: Response): Promise<Response>{
        const listCustomerService = new ListCostumerService();
        const customers = await listCustomerService.execute();
        return response.json(customers);
    }


    async update (request: Request, response: Response): Promise <Response>{
        const id= Number(request.body.id);
        const { name, email, cpfOrCnpj, birthday, complement} = request.body;
        const updateCustomerService = new UpdateCustomerService();
        const customer = await updateCustomerService.execute(
            {
                id,
                name,
                email,
                cpfOrCnpj,
                birthday,
                complement
            }
        );
        return response.json(customer);
    }

    async delete (request: Request, response: Response): Promise <Response>{
        const id= Number(request.body.id);
        const deleteCustomerService = new DeleteCustomerService();
        await deleteCustomerService.execute({id});
        return response.status(204).send([]);
    }

}