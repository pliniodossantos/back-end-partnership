import { Store } from "../infra/database/entities/Store"; 

export interface ISessionStoreResponse{
    store: Store;
    token: string;
}