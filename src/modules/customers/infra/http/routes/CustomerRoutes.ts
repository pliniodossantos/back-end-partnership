import { Router } from "express";
import CustomersControllers from "../controllers/CustomersControllers";
import { createCustomerSchema, idParamsValidate, updateCustomerSchema } from "../schemas/CustomerSchema";
import CustomerAuthMiddleware from "../../../middlewares/CustomerAuthMiddleware";
import AuthCorrectId from "../../../../../shared/middlewares/AuthCorrectId";
import UpdateCustomerStateController from "../controllers/UpdateCustomerStateController";
import { updateCustomerStateSchema } from "../schemas/UpdateCustomerStateSchema";


const customersRouter = Router();
const customersController = new CustomersControllers();
const updateCustomerStateController = new UpdateCustomerStateController();

customersRouter.get('/', CustomerAuthMiddleware.execute, customersController.index);
customersRouter.get('/:id',  idParamsValidate , CustomerAuthMiddleware.execute, AuthCorrectId.execute, customersController.show);
customersRouter.post('/', createCustomerSchema , customersController.create);
customersRouter.put('/:id', updateCustomerSchema, CustomerAuthMiddleware.execute, AuthCorrectId.execute, customersController.update);
customersRouter.delete('/:id', idParamsValidate, CustomerAuthMiddleware.execute, AuthCorrectId.execute, customersController.delete);
customersRouter.patch('/state/:id', updateCustomerStateSchema, CustomerAuthMiddleware.execute, AuthCorrectId.execute, updateCustomerStateController.update ) 

export default customersRouter;