import AppError from "../../../shared/errors/AppError";
import { Store } from "../infra/database/entities/Store";
import { storeRepositories } from "../infra/database/repositories/StoresRepositories";
import { IUpdateStore } from "../models/IUpdateStore";





export default class UpdateStoreService {
    async execute({ id, name, email, cnpj, birthday}: IUpdateStore): Promise<Store> {
        const store = await storeRepositories.findById(id);
        const emailExists = await storeRepositories.findByEmail(email);
        const cnpjExists = await storeRepositories.findByCnpj(cnpj);
        if (!store) {
            throw new AppError('Loja não encontrada', 404);
        }

        if(store.email == email && store.cnpj == cnpj){
            store.name = name;
            store.birthday = birthday;
    
            await storeRepositories.save(store);
            return store;
        }
        if(store.email == email && store.cnpj != cnpj && !cnpjExists){
            store.name = name;
            store.birthday = birthday;
            store.cnpj = cnpj;
            await storeRepositories.save(store);
            return store;
        }
        if(store.cnpj == cnpj && store.email != email   && !emailExists){
            store.name = name;
            store.birthday = birthday;
            store.email = email;
            await storeRepositories.save(store);
            return store;
        }
        if (cnpjExists || emailExists) {
            throw new AppError('Este cnpj ou email já está em uso', 409);
        }
     
        store.name = name;
        store.email = email;
        store.cnpj = cnpj;
        store.birthday = birthday;

        await storeRepositories.save(store);
        return store;
    }
}