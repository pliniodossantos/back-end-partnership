import { Request, Response } from "express";
import CreateAdmServiceFirstStep from "../../../../services/CreateAdmServiceFirstStep";
import ShowAdmService from "../../../../services/ShowAdmService";
import CreateAdmServiceSecondStep from "../../../../services/CreateAdmServiceSecondStep";
import DeleteAdmService from "../../../../services/DeleteAdmService";
import UpdateAdmService from "../../../../services/UpdateAdmService";


export default class Admcontrollers {

    async show(request: Request, response: Response): Promise<Response>{
        const id = Number(request.params.id);
        const showadminService = new ShowAdmService();
        const admin = await showadminService.execute({id});
        return response.json(admin);

    }
    async send (request: Request, response: Response): Promise <Response>{
        const sendEmailAdminService = new CreateAdmServiceFirstStep();
        await sendEmailAdminService.execute();
        return response.status(204).send([]);
    }

    async create (request: Request, response: Response): Promise <Response>{
        const {name, email, cpf, password, keyAcess} = request.body;
        const createAdm = new CreateAdmServiceSecondStep();
        const adm = await createAdm.execute({
            name,
            email,
            cpf,
            password,
            keyAcess
        });
        return response.json(adm);

    }
    async update (request: Request, response: Response): Promise <Response>{
        const id= Number(request.params.id);
        const { name, email, cpf} = request.body;
        const updateAdmService = new UpdateAdmService();
        const admin = await updateAdmService.execute(
            {
                id,
                name,
                email,
                cpf           }
        );
        return response.json(admin);
    }

    async delete (request: Request, response: Response): Promise <Response>{
        const id= Number(request.params.id);
        const deleteAdmService = new DeleteAdmService();
        await deleteAdmService.execute({id});
        return response.status(204).send([]);
    }

}