import { AppDataSource } from "../../../../../shared/infra/typeorm/data-source";
import { Store } from "../entities/Store";


export const storeRepositories = AppDataSource.getRepository(Store).extend({

    async findByEmail(email: string): Promise<Store | null> {
        return this.findOneBy({email});
    },

    async findByCnpj(cnpj: string): Promise<Store | null> {
        return this.findOneBy({cnpj});
    },
    async findById(id: number): Promise<Store | null> {
        return this.findOneBy({id});
    }
})