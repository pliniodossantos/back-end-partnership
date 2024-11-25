import { Admin } from "../infra/database/entities/Admin";

export interface ISessionAdminResponse{
    admin: Admin,
    token: string
}