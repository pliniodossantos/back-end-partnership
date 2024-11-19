import { addHours, isAfter } from "date-fns";
import AppError from "../../../shared/errors/AppError";
import { hash } from "bcrypt";
import { IResetStorePassword } from "../models/IResetStorePassword";
import { storeTokensRepositories } from "../infra/database/repositories/StoreTokenRepositories";
import { storeRepositories } from "../infra/database/repositories/StoresRepositories";



export default class ResetStorePasswordService{
    async execute ({token, password}: IResetStorePassword): Promise<void>{
        const storeToken = await storeTokensRepositories.findByToken(token);

        if (!storeToken) {
            throw new AppError('token inexistente', 404);
        }

        const store = await storeRepositories.findById(storeToken.store_id);

        if (!store) {
            throw new AppError("Loja Não Existe")
        }

        const  tokenCreatedAt = storeToken.created_at;
        const compareDate = addHours(tokenCreatedAt, 1);

        if (isAfter(Date.now(), compareDate)) {
            throw new AppError('Token Expirado', 401)
        }
        store.password = await hash(password, 10);

        await storeRepositories.save(store);
    }
}