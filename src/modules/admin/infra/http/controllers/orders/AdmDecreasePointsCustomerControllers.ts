import { Request, Response } from "express";
import DecreasePointsCustomerService from "../../../../services/DecreasePointsCustomerService";

export default class AdmDecreasePointsCustomerControllers {
async decrease (request: Request, response: Response): Promise <Response>{
    const {customerCpfOrCnpj, points_customer} = request.body;
    const decreasePointsCustomerService = new DecreasePointsCustomerService();
    const order = await decreasePointsCustomerService.execute({
        
        customerCpfOrCnpj,
        points_customer
    });
    return response.json(order);

}


}