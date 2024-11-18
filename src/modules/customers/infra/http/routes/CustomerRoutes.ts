import { Router } from "express";
import CustomersControllers from "../controllers/CustomersControllers";
import { createCustomerSchema, idParamsValidate, updateCustomerSchema } from "../schemas/CustomerSchema";
import AuthMiddleware from "../../../../../shared/middlewares/AuthMiddleware";
import AuthCorrectId from "../../../../../shared/middlewares/AuthCorrectId";
import UpdateCustomerStateController from "../controllers/UpdateCustomerStateController";
import { updateCustomerStateSchema } from "../schemas/UpdateCustomerStateSchema";


const customersRouter = Router();
const customersController = new CustomersControllers();
const updateCustomerStateController = new UpdateCustomerStateController();

customersRouter.get('/', AuthMiddleware.execute, customersController.index);
customersRouter.get('/:id',  idParamsValidate , AuthMiddleware.execute, AuthCorrectId.execute, customersController.show);
customersRouter.post('/', createCustomerSchema , customersController.create);
customersRouter.put('/:id', updateCustomerSchema, AuthMiddleware.execute, AuthCorrectId.execute, customersController.update);
customersRouter.delete('/:id', idParamsValidate, AuthMiddleware.execute, AuthCorrectId.execute, customersController.delete);
customersRouter.patch('/state/:id', updateCustomerStateSchema, AuthMiddleware.execute, AuthCorrectId.execute, updateCustomerStateController.update ) 

export default customersRouter;