import { Router } from "express";
import AuthCorrectId from "../../../../../shared/middlewares/AuthCorrectId";
import ConsultantsControllers from "../controllers/ConsultantsControllers";
import UpdateConsultantStateController from "../controllers/UpdateConsultantStateController";
import ConsultantAuthMiddleware from "../../../middlewares/ConsultantAuthMiddleware";
import { createConsultantSchema, idParamsValidate, updateConsultantSchema } from "../schemas/ConsultantSchema";
import { updateConsultantStateSchema } from "../schemas/UpdateConsultantStateSchema";
import { updateConsultantStoreSchema } from "../schemas/UpdateConsulantStoreSchema";
import UpdateConsultantStoreController from "../controllers/UpdateConsultantStoreController";
import ListConsulantOrdersControllers from "../../../../orders/infra/database/http/controllers/ListConsulantOrdersControllers";
import { createOrdertSchema } from "../../../../orders/infra/database/http/schemas/OrderSchema";
import OrdersControllers from "../../../../orders/infra/database/http/controllers/OrdersControllers";



const consulantsRouter = Router();
const consultantsControllers = new ConsultantsControllers();
const updateConsultantStateController = new UpdateConsultantStateController();
const updateConsultantStoreController = new UpdateConsultantStoreController();
const listConsulantOrdersControllers = new ListConsulantOrdersControllers();
const ordersControllers = new OrdersControllers();

consulantsRouter.get('/', ConsultantAuthMiddleware.execute, consultantsControllers.index);
consulantsRouter.get('/:id',  idParamsValidate , ConsultantAuthMiddleware.execute, AuthCorrectId.execute, consultantsControllers.show);
consulantsRouter.post('/', createConsultantSchema , consultantsControllers.create);
consulantsRouter.put('/:id', updateConsultantSchema, ConsultantAuthMiddleware.execute, AuthCorrectId.execute, consultantsControllers.update);
consulantsRouter.delete('/:id', idParamsValidate, ConsultantAuthMiddleware.execute, AuthCorrectId.execute, consultantsControllers.delete);
consulantsRouter.patch('/state/:id', updateConsultantStateSchema, ConsultantAuthMiddleware.execute, AuthCorrectId.execute, updateConsultantStateController.update ) 
consulantsRouter.patch('/storeupdate/:id', updateConsultantStoreSchema, ConsultantAuthMiddleware.execute, AuthCorrectId.execute, updateConsultantStoreController.update)
consulantsRouter.get('/orders/:id', idParamsValidate, ConsultantAuthMiddleware.execute, AuthCorrectId.execute, listConsulantOrdersControllers.show)
consulantsRouter.post('/orders/:id', createOrdertSchema, ConsultantAuthMiddleware.execute, AuthCorrectId.execute, ordersControllers.create)

export default consulantsRouter;