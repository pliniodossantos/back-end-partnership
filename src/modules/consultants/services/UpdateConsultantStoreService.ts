import AppError from "../../../shared/errors/AppError";
import { storeRepositories } from "../../stores/infra/database/repositories/StoresRepositories";
import { Consultant } from "../infra/database/entities/Consultant";
import { consultantsRepositories } from "../infra/database/respositories/ConsultantsRepositories";
import { IUpdateConsultanteStore } from "../models/IUpdateConsultanteStore";



export default class UpdateConsultantStoreService {
    async execute({ id, cnpjStore }: IUpdateConsultanteStore): Promise<Consultant> {
        const consultant = await consultantsRepositories.findById(id);
        const storeExists = await storeRepositories.findByCnpj(cnpjStore)
        if (!consultant) {
            throw new AppError('Consultor não encontrado', 404);
        }
        if (!storeExists) {
            throw new AppError('Loja não encontrada', 404);
        }
        
        consultant.store_id = storeExists.id

        await consultantsRepositories.save(consultant);
        return consultant;
    }
}