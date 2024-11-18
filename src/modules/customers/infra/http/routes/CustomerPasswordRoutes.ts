import { Router } from "express";
import ForgotCustomerPasswordController from "../controllers/ForgotCustomerPasswordController";
import ResetCustomerPasswordController from "../controllers/ResetCustomerPasswordController";
import { ForgotCustomerPasswordSchema, ResetCustomerPasswordSchema, updateCustomerPasswordSchema } from "../schemas/CustomerPasswordSchema";
import AuthMiddleware from "../../../../../shared/middlewares/AuthMiddleware";
import AuthCorrectId from "../../../../../shared/middlewares/AuthCorrectId";
import UpdateCustomerPasswordControlers from "../controllers/UpdateCustomerPasswordControlers";


const customerPasswordRouter = Router();
const forgotCustomerPasswordController = new ForgotCustomerPasswordController();
const resetCustomerPasswordController =  new ResetCustomerPasswordController();
const updateCustomerPasswordControlers = new UpdateCustomerPasswordControlers();

customerPasswordRouter.post('/forgot', ForgotCustomerPasswordSchema, forgotCustomerPasswordController.create,);
customerPasswordRouter.patch('/reset', ResetCustomerPasswordSchema, resetCustomerPasswordController.create);
customerPasswordRouter.patch('/update/:id', updateCustomerPasswordSchema, AuthMiddleware.execute, AuthCorrectId.execute, updateCustomerPasswordControlers.create);


export default customerPasswordRouter;