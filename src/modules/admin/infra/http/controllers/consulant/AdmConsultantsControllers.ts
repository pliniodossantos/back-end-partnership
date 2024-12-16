import { Request, Response } from "express";
import ListConsultantService from "../../../../../consultants/services/ListConsultantService";
import UpdateConsultantService from "../../../../../consultants/services/UpdateConsultantService";
import DeleteConsultantService from "../../../../../consultants/services/DeleteConsultantService";



export default class AdmConsultantsControllers {

    async index(request: Request, response: Response): Promise<Response>{
        const listConsultanteService = new ListConsultantService();
        const consultants = await listConsultanteService.execute();
        return response.json(consultants);
    }

    async update (request: Request, response: Response): Promise <Response>{
        const id = Number(request.body.id);
        const {name, email, cpf, birthday} = request.body;
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