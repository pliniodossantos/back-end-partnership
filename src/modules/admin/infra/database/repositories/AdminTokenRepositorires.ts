import { AppDataSource } from "../../../../../shared/infra/typeorm/data-source";
import AdminTokens from "../entities/AdminTokens";


export const adminTokenRepositorires = AppDataSource.getRepository(AdminTokens).extend({
    async findByToken(token: string): Promise<AdminTokens | null>{
        const adminToken = await this.findOneBy({token});
        return adminToken;
    },

    async generate(admin_id: number): Promise<AdminTokens | undefined>{
        const adminToken =  this.create({
            admin_id,
        });
        await this.save(adminToken);
        return adminToken;
    }
})