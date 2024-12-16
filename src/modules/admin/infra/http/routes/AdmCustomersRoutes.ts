import { Router } from "express";
import AdmCustomersControllers from "../controllers/customers/AdmCustomersControllers";
import AdmAuthMiddleware from "../../../middlewares/AdmAuthMiddleware";
import { AdmDeleteCustomerSchema, AdmUpdateCustomerSchema, AdmUpdateStateCustomerSchema } from "../schemas/AdmCustomerSchema";
import AdmUpdateCustomerStateController from "../controllers/customers/AdmUpdateCustomerStateController";


const AdmcustomersRouter = Router();
const admCustomersControllers = new AdmCustomersControllers();
const admUpdateCustomerStateController =  new AdmUpdateCustomerStateController();

AdmcustomersRouter.put('/', AdmUpdateCustomerSchema, AdmAuthMiddleware.execute, admCustomersControllers.update);
AdmcustomersRouter.delete('/:id',AdmDeleteCustomerSchema, AdmAuthMiddleware.execute,admCustomersControllers.delete);
AdmcustomersRouter.patch('/state/', AdmUpdateStateCustomerSchema, AdmAuthMiddleware.execute, admUpdateCustomerStateController.update ) 
AdmcustomersRouter.get('/', AdmAuthMiddleware.execute, admCustomersControllers.index);

export default AdmcustomersRouter;