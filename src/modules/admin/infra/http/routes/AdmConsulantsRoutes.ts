import { Router } from "express";
import AdmConsultantsControllers from "../controllers/consulant/AdmConsultantsControllers";
import AdmAuthMiddleware from "../../../middlewares/AdmAuthMiddleware";
import { AdmDeleteConsultantSchema, AdmUpdateConsultantSchema, AdmUpdateStateConsultantSchema, AdmUpdateStoreConsultantSchema } from "../schemas/AdmConsulantSchema";
import AdmUpdateConsultantStateController from "../controllers/consulant/AdmUpdateConsultantStateController";
import AdmUpdateConsultantStoreController from "../controllers/consulant/AdmUpdateConsultantStoreController";

const AdmconsulantsRouter = Router();
const admConsultantsControllers = new AdmConsultantsControllers();
const admUpdateConsultantStateController = new AdmUpdateConsultantStateController();
const admUpdateConsultantStoreController = new AdmUpdateConsultantStoreController();

AdmconsulantsRouter.get('/', AdmAuthMiddleware.execute, admConsultantsControllers.index);
AdmconsulantsRouter.put('/', AdmUpdateConsultantSchema, AdmAuthMiddleware.execute, admConsultantsControllers.update);
AdmconsulantsRouter.delete('/', AdmDeleteConsultantSchema, AdmAuthMiddleware.execute, admConsultantsControllers.delete);
AdmconsulantsRouter.patch('/state', AdmUpdateStateConsultantSchema, AdmAuthMiddleware.execute, admUpdateConsultantStateController.update ) 
AdmconsulantsRouter.patch('/storeupdate/', AdmUpdateStoreConsultantSchema, AdmAuthMiddleware.execute, admUpdateConsultantStoreController.update)

export default AdmconsulantsRouter;