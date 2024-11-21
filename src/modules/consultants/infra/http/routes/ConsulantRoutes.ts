import { Router } from "express";
import AuthCorrectId from "../../../../../shared/middlewares/AuthCorrectId";
import ConsultantsControllers from "../controllers/ConsultantsControllers";
import UpdateConsultantStateController from "../controllers/UpdateConsultantStateController";
import ConsultantAuthMiddleware from "../../../middlewares/ConsultantAuthMiddleware";
import { createConsultantSchema, idParamsValidate, updateConsultantSchema } from "../schemas/ConsultantSchema";
import { updateConsultantStateSchema } from "../schemas/UpdateConsultantStateSchema";
import { updateConsultantStoreSchema } from "../schemas/UpdateConsulantStoreSchema";
import UpdateConsultantStoreController from "../controllers/UpdateConsultantStoreController";



const consulantsRouter = Router();
const consultantsControllers = new ConsultantsControllers();
const updateConsultantStateController = new UpdateConsultantStateController();
const updateConsultantStoreController = new UpdateConsultantStoreController();

consulantsRouter.get('/', ConsultantAuthMiddleware.execute, consultantsControllers.index);
consulantsRouter.get('/:id',  idParamsValidate , ConsultantAuthMiddleware.execute, AuthCorrectId.execute, consultantsControllers.show);
consulantsRouter.post('/', createConsultantSchema , consultantsControllers.create);
consulantsRouter.put('/:id', updateConsultantSchema, ConsultantAuthMiddleware.execute, AuthCorrectId.execute, consultantsControllers.update);
consulantsRouter.delete('/:id', idParamsValidate, ConsultantAuthMiddleware.execute, AuthCorrectId.execute, consultantsControllers.delete);
consulantsRouter.patch('/state/:id', updateConsultantStateSchema, ConsultantAuthMiddleware.execute, AuthCorrectId.execute, updateConsultantStateController.update ) 
consulantsRouter.patch('/storeupdate/:id', updateConsultantStoreSchema, ConsultantAuthMiddleware.execute, AuthCorrectId.execute, updateConsultantStoreController.update)

export default consulantsRouter;