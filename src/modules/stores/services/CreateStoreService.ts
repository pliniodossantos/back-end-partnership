import AppError from "../../../shared/errors/AppError";
import { hash } from "bcrypt";
import { Secret, sign } from "jsonwebtoken";
import { ICreateStore } from "../models/ICreateStore";
import { storeRepositories } from "../infra/database/repositories/StoresRepositories";
import { ISessionStoreResponse } from "../models/ISessionStoreResponse";


export default class CreateStoreService{
    async execute({name, email, cnpj, password, active = true, birthday}: ICreateStore): Promise<ISessionStoreResponse>{
        const emailExists = await storeRepositories.findByEmail(email);
        const cnpjExists = await storeRepositories.findByCnpj(cnpj);
        


        if(emailExists){
            throw new AppError('Este email já está em uso', 409);
        }
        if(cnpjExists){
            throw new AppError('Este cnpj já está em uso', 409);
        }
       
        const hashedPassword = await hash(password, 10);
        const store = storeRepositories.create({
            name,
            email,
            cnpj,
            password: hashedPassword,
            active,
            birthday,
        });

        

        await storeRepositories.save(store);
        
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