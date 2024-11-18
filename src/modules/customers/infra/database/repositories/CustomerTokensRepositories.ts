import { AppDataSource } from "../../../../../shared/infra/typeorm/data-source";
import CustomerToken from "../entities/CustomerToken";


export const customerTokensRepositories = AppDataSource.getRepository(CustomerToken,).extend({
    async findByToken(token: string): Promise<CustomerToken | null>{
        const customerToken = await this.findOneBy({token});
        return customerToken;
    },

    async generate(customer_id: number): Promise<CustomerToken | undefined>{
        const customerToken =  this.create({
            customer_id,
        });
        await this.save(customerToken);
        return customerToken;
    }
})