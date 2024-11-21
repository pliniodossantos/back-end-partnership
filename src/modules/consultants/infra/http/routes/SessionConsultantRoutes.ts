import { Router } from "express";
import SessionConsultantController from "../controllers/SessionConsultantController";
import { sessionConsultantSchema } from "../schemas/SessionConsultantSchema";



const sessionConsulantRouter = Router();
const sessionConsultantController = new SessionConsultantController();

sessionConsulantRouter.post('/', sessionConsultantSchema, sessionConsultantController.Create);

export default sessionConsulantRouter;