import { Consultant } from "../infra/database/entities/Consultant";
import { consultantsRepositories } from "../infra/database/respositories/ConsultantsRepositories";




export default class ListConsultantService {
    async execute(): Promise<Consultant[]> {
        const consultant =  await consultantsRepositories.find();
        return consultant;
}
}