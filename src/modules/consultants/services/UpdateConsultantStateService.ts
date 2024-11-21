import AppError from "../../../shared/errors/AppError";
import { Consultant } from "../infra/database/entities/Consultant";
import { consultantsRepositories } from "../infra/database/respositories/ConsultantsRepositories";
import { IUpdateConsultantState } from "../models/IUpdateConsultantState";


export default class UpdateConsultantStateService {
    async execute({ id, active }: IUpdateConsultantState): Promise<Consultant> {
        const consultant = await consultantsRepositories.findById(id);
        if (!consultant) {
            throw new AppError('Consultor não encontrado', 404);
        }

        consultant.active = active;
        await consultantsRepositories.save(consultant);
        return consultant;
    }
}