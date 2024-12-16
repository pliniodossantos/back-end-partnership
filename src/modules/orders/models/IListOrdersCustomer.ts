export interface IListOrdersCustomer{
    id: number;
    consulant: string;
    store: string;
    obs: string;
    expires: Date;
    points: number;
    pending: boolean;
}