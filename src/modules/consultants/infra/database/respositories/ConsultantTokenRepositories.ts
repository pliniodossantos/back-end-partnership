import { AppDataSource } from "../../../../../shared/infra/typeorm/data-source";
import ConsultantToken from "../entities/ConsultantToken";




export const consultantTokenRepositories = AppDataSource.getRepository(ConsultantToken,).extend({
    async findByToken(token: string): Promise<ConsultantToken | null>{
        const consultantToken = await this.findOneBy({token});
        return consultantToken;
    },

    async generate(consultant_id: number): Promise<ConsultantToken | undefined>{
        const consultantToken =  this.create({
            consultant_id,
        });
        await this.save(consultantToken);
        return consultantToken;
    }
})