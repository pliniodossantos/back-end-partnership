import { Request, Response } from "express";
import CreateCustomerService from "../../../services/CreateCustomerService";
import ListCostumerService from "../../../services/ListCustomerService";
import ShowCostumerService from "../../../services/ShowCustomerService";
import UpdateCustomerService from "../../../services/UpdateCustomerService";
import DeleteCustomerService from "../../../services/DeleteCustomerService";


export default class CustomersControllers {

    async index(request: Request, response: Response): Promise<Response>{
        const listCustomerService = new ListCostumerService();
        const customers = await listCustomerService.execute();
        return response.json(customers);
    }


    async show(request: Request, response: Response): Promise<Response>{
        const id = Number(request.params.id);
        const showCustomerService = new ShowCostumerService();
        const customer = await showCustomerService.execute({id});
        return response.json(customer);

    }

    async create (request: Request, response: Response): Promise <Response>{
        const {name, email, cpfOrCnpj, password, active ,birthday, complement} = request.body;
        const createCustomerService = new CreateCustomerService();
        const customer = await createCustomerService.execute({
            name,
            email,
            cpfOrCnpj,
            password,
            active : true,
            birthday,
            complement
        });
        return response.json(customer);

    }

    async update (request: Request, response: Response): Promise <Response>{
        const id= Number(request.params.id);
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
        const id= Number(request.params.id);
        const deleteCustomerService = new DeleteCustomerService();
        await deleteCustomerService.execute({id});
        return response.status(204).send([]);
    }

}