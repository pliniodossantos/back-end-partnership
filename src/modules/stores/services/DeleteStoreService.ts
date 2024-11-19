import AppError from "../../../shared/errors/AppError";
import { storeRepositories } from "../infra/database/repositories/StoresRepositories";
import { IDeleteStore } from "../models/IDeleteStore";



export default class DeleteStoreService {
    async execute ({id}: IDeleteStore): Promise<void>{
        const store = await storeRepositories.findById(id);
       
        if (!store) {
            throw new AppError('Loja não encontrada', 404);
        }

        await storeRepositories.remove(store);
    }
}