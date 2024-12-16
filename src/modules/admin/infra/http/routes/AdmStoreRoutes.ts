import { Router } from "express";
import AdmStoresControllers from "../controllers/stores/AdmStoresControllers";
import AdmAuthMiddleware from "../../../middlewares/AdmAuthMiddleware";
import { AdmDeleteStoreSchema, AdmUpdateStateStoreSchema, AdmUpdateStoreSchema } from "../schemas/AdmStoreSchema";
import AdmUpdateStoreStateController from "../controllers/stores/AdmUpdateStoreStateController";

const AdmstoresRouter = Router();
const admStoresControllers = new AdmStoresControllers();
const admUpdateStoreStateController = new AdmUpdateStoreStateController();

AdmstoresRouter.get('/', AdmAuthMiddleware.execute, admStoresControllers.index);
AdmstoresRouter.put('/', AdmUpdateStoreSchema, AdmAuthMiddleware.execute, admStoresControllers.update);
AdmstoresRouter.delete('/:id', AdmDeleteStoreSchema, AdmAuthMiddleware.execute, admStoresControllers.delete);
AdmstoresRouter.patch('/state', AdmUpdateStateStoreSchema, AdmAuthMiddleware.execute, admUpdateStoreStateController.update ) 


export default AdmstoresRouter;