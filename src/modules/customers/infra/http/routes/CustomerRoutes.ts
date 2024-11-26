import { Router } from "express";
import CustomersControllers from "../controllers/CustomersControllers";
import { createCustomerSchema, idParamsValidate, updateCustomerSchema } from "../schemas/CustomerSchema";
import CustomerAuthMiddleware from "../../../middlewares/CustomerAuthMiddleware";
import AuthCorrectId from "../../../../../shared/middlewares/AuthCorrectId";
import UpdateCustomerStateController from "../controllers/UpdateCustomerStateController";
import { updateCustomerStateSchema } from "../schemas/UpdateCustomerStateSchema";
import ListCustomerOrdersControllers from "../../../../orders/infra/database/http/controllers/ListCustomerOrdersControllers";


const customersRouter = Router();
const customersController = new CustomersControllers();
const updateCustomerStateController = new UpdateCustomerStateController();
const listCustomerOrdersControllers = new ListCustomerOrdersControllers();

customersRouter.get('/:id',  idParamsValidate , CustomerAuthMiddleware.execute, AuthCorrectId.execute, customersController.show);
customersRouter.post('/', createCustomerSchema , customersController.create);
customersRouter.put('/:id', updateCustomerSchema, CustomerAuthMiddleware.execute, AuthCorrectId.execute, customersController.update);
customersRouter.patch('/state/:id', updateCustomerStateSchema, CustomerAuthMiddleware.execute, AuthCorrectId.execute, updateCustomerStateController.update ) 
customersRouter.get('/orders/:id', idParamsValidate, CustomerAuthMiddleware.execute, AuthCorrectId.execute, listCustomerOrdersControllers.show)


export default customersRouter;