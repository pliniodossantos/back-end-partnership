import { AppDataSource } from "../../../../../shared/infra/typeorm/data-source";
import { Customer } from "../entities/Customer";

export const customerRepositories = AppDataSource.getRepository(Customer).extend({

    async findByEmail(email: string): Promise<Customer | null> {
        return this.findOneBy({email});
    },

    async findByCPFOrCnpj(cpfOrCnpj: string): Promise<Customer | null> {
        return this.findOneBy({cpfOrCnpj});
    },
    async findById(id: number): Promise<Customer | null> {
        return this.findOneBy({id});
    }
})