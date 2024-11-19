import { AppDataSource } from "../../../../../shared/infra/typeorm/data-source";
import StoreToken from "../entities/StoreToken";



export const storeTokensRepositories = AppDataSource.getRepository(StoreToken,).extend({
    async findByToken(token: string): Promise<StoreToken | null>{
        const storeToken = await this.findOneBy({token});
        return storeToken;
    },

    async generate(store_id: number): Promise<StoreToken | undefined>{
        const storeToken =  this.create({
            store_id,
        });
        await this.save(storeToken);
        return storeToken;
    }
})