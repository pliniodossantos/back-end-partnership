import { Consultant } from "../infra/database/entities/Consultant";


export interface ISessionConsultantResponse{
    consultant: Consultant;
    token: string;
}