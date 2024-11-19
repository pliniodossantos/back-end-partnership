import { Store } from "../infra/database/entities/Store";
import { storeRepositories } from "../infra/database/repositories/StoresRepositories";



export default class ListStoreService {
    async execute(): Promise<Store[]> {
        const stores =  await storeRepositories.find();
        return stores;
}
}