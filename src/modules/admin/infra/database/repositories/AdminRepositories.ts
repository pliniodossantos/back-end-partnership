import { AppDataSource } from "../../../../../shared/infra/typeorm/data-source";
import { Admin } from "../entities/Admin";


export const adminRepositories = AppDataSource.getRepository(Admin).extend({
    async findById(id: number): Promise<Admin | null> {
        return this.findOneBy({id});
    },
    async findByEmail(email: string): Promise<Admin | null> {
        return this.findOneBy({email});
    },
    async findByCpf(cpf: string): Promise<Admin | null> {
        return this.findOneBy({cpf});
    }
})