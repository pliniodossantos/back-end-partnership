
import AppError from "../../../shared/errors/AppError";
import { Store } from "../infra/database/entities/Store";
import { storeRepositories } from "../infra/database/repositories/StoresRepositories";
import { IUpdateStoreState } from "../models/IUpdateStoreState";




export default class UpdateStoreStateService {
    async execute({ id, active }: IUpdateStoreState): Promise<Store> {
        const store = await storeRepositories.findById(id);
        if (!store) {
            throw new AppError('Loja não encontrada', 404);
        }

        store.active = active;
        await storeRepositories.save(store);
        return store;
    }
}