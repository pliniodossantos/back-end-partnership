import AppError from "../../../shared/errors/AppError";
import { Store } from "../infra/database/entities/Store";
import { storeRepositories } from "../infra/database/repositories/StoresRepositories";
import { IShowStore } from "../models/IShowStore";

export default class ShowStoreService {
    async execute({id}: IShowStore): Promise<Store> {
        
        const store = await storeRepositories.findById(id);
        if(!store){
            throw new AppError('Loja não encontrada', 404);
        }
       
        return store;
        
    }
}