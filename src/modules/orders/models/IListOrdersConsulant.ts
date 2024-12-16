export interface IListOrdersConsulant{
    id: number;
    customer: string;
    store: string;
    obs: string;
    expires: Date;
    points: number;
    pending: boolean;
}