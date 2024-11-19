import { compare } from "bcrypt";
import AppError from "../../../shared/errors/AppError";
import { Secret, sign } from "jsonwebtoken";
import { ISessionStore } from "../models/ISessionStore";
import { storeRepositories } from "../infra/database/repositories/StoresRepositories";
import { ISessionStoreResponse } from "../models/ISessionStoreResponse";



export default class SessionStoreService{
    async execute ({cnpj, password}: ISessionStore ): Promise<ISessionStoreResponse>{
        const store = await storeRepositories.findByCnpj(cnpj);
        
        if(!store){
            throw new AppError('CNPJ ou Senha incorreto',401)
        }

        const passwordConfirmed = await compare(password, store.password)
        if(!passwordConfirmed){
            throw new AppError('CNPJ ou Senha incorreto',401)
        }

        const token = sign({}, process.env.STORE_SECRET as Secret,{
            subject: String(store.id),
            expiresIn: '5d',
        });
 

        return{
            store,
            token
        }
    }
}