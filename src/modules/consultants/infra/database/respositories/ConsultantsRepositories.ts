import { AppDataSource } from "../../../../../shared/infra/typeorm/data-source";
import { Consultant } from "../entities/Consultant";



export const consultantsRepositories = AppDataSource.getRepository(Consultant).extend({

    async findByEmail(email: string): Promise<Consultant | null> {
        return this.findOneBy({email});
    },

    async findByCpf(cpf: string): Promise<Consultant | null> {
        return this.findOneBy({cpf});
    },
    async findById(id: number): Promise<Consultant | null> {
        return this.findOneBy({id});
    }
})