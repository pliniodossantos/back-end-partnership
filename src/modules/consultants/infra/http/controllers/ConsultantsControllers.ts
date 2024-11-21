import { Request, Response } from "express";
import ListConsultantService from "../../../services/ListConsultantService";
import ShowConsultantService from "../../../services/ShowConsultantService";
import CreateConsultantService from "../../../services/CreateConsultantService";
import UpdateConsultantService from "../../../services/UpdateConsultantService";
import DeleteConsultantService from "../../../services/DeleteConsultantService";



export default class ConsultantsControllers {

    async index(request: Request, response: Response): Promise<Response>{
        const listConsultanteService = new ListConsultantService();
        const consultants = await listConsultanteService.execute();
        return response.json(consultants);
    }


    async show(request: Request, response: Response): Promise<Response>{
        const id = Number(request.params.id);
        const showConsultantService = new ShowConsultantService();
        const consultant = await showConsultantService.execute({id});
        return response.json(consultant);

    }

    async create (request: Request, response: Response): Promise <Response>{
        const {name, email, cpf, password, active ,birthday, cnpjStore} = request.body;
        const createConsultantService = new CreateConsultantService();
        const consultant = await createConsultantService.execute({
            name,
            email,
            cpf,
            password,
            active,
            birthday,
            cnpjStore
        });
        return response.json(consultant);

    }

    async update (request: Request, response: Response): Promise <Response>{
        const id= Number(request.params.id);
        const { name, email, cpf, birthday} = request.body;
        const updateConsultantService = new UpdateConsultantService();
        const consultant = await updateConsultantService.execute(
            {
                id,
                name,
                email,
                cpf,
                birthday,
            }
        );
        return response.json(consultant);
    }

    async delete (request: Request, response: Response): Promise <Response>{
        const id= Number(request.params.id);
        const deleteConsultantService = new DeleteConsultantService();
        await deleteConsultantService.execute({id});
        return response.status(204).send([]);
    }

}