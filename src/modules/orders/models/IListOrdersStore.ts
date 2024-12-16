export interface IListOrdersStore{
    id: number;
    consulant: string;
    customer: string;
    obs: string;
    expires: Date;
    points: number;
    pending: boolean;
}