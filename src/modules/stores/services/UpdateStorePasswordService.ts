import { compare, hash } from "bcrypt";
import AppError from "../../../shared/errors/AppError";
import { IUpdatePasswordStore } from "../models/IUpdatePasswordStore";
import { storeRepositories } from "../infra/database/repositories/StoresRepositories";




export default class UpdateStorePasswordService{
    async reset({id, oldPassword, newPassword}: IUpdatePasswordStore): Promise<void>{
        const store =  await storeRepositories.findById(id);

        if (!store) {
            throw new AppError("Loja não encontrada")
        }
        const oldPasswordConfirmed = await compare(oldPassword, store.password)
        if (!oldPasswordConfirmed) {
          throw new AppError("Senha atual incorreta", 401)  
        }

        store.password = await hash(newPassword,10);
        await storeRepositories.save(store);
    }
}