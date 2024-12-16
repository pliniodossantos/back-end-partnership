export interface IListOrdersadmin{
    id: number;
    consulant: string;
    customer: string;
    store: string;
    obs: string;
    expires: Date;
    pointsCustomer: number;
    pointsConsulant: number;
    pending: boolean;
}