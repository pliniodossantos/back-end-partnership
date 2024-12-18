import { Request, Response } from "express";
import DecreasePointsConsulantService from "../../../../services/DecreasePointsConsulantService";

export default class AdmDecreasePointsConsulantControllers {
async decrease (request: Request, response: Response): Promise <Response>{
    const {consulantCpf, points_consulant} = request.body;
    const decreasePointsConsulantService = new DecreasePointsConsulantService();
    const order = await decreasePointsConsulantService.execute({
        
        consulantCpf,
        points_consulant
    });
    return response.json(order);

}


}