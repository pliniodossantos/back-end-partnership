import { Router } from "express";
import AuthCorrectId from "../../../../../shared/middlewares/AuthCorrectId";
import StoresControllers from "../controllers/StoresControllers";
import UpdateStoreStateController from "../controllers/UpdateStoreStateController";
import { createStoreSchema, idParamsValidate, updateStoreSchema } from "../schemas/StoreSchema";
import { updateStoreStateSchema } from "../schemas/UpdateStoreStateSchema";
import StoreAuthMiddleware from "../../../middlewares/StoreAuthMiddleware";
import ListStoreOrdersControllers from "../../../../orders/infra/database/http/controllers/ListStoreOrdersControllers";


const storesRouter = Router();
const storesController = new StoresControllers();
const updateStoreStateController = new UpdateStoreStateController();
const listStoreOrdersControllers = new ListStoreOrdersControllers();


storesRouter.get('/', StoreAuthMiddleware.execute, storesController.index);
storesRouter.get('/:id',  idParamsValidate , StoreAuthMiddleware.execute, AuthCorrectId.execute, storesController.show);
storesRouter.post('/', createStoreSchema , storesController.create);
storesRouter.put('/:id', updateStoreSchema, StoreAuthMiddleware.execute, AuthCorrectId.execute, storesController.update);
storesRouter.delete('/:id', idParamsValidate, StoreAuthMiddleware.execute, AuthCorrectId.execute, storesController.delete);
storesRouter.patch('/state/:id', updateStoreStateSchema, StoreAuthMiddleware.execute, AuthCorrectId.execute, updateStoreStateController.update ) 
storesRouter.get('/orders/:id', idParamsValidate, StoreAuthMiddleware.execute, AuthCorrectId.execute, listStoreOrdersControllers.show)


export default storesRouter;