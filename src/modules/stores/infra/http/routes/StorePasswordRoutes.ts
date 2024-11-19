import { Router } from "express";
import AuthCorrectId from "../../../../../shared/middlewares/AuthCorrectId";
import ForgotStorePasswordController from "../controllers/ForgotStorePasswordController";
import ResetStorePasswordController from "../controllers/ResetStorePasswordController";
import UpdateStorePasswordControlers from "../controllers/UpdateStorePasswordControlers";
import { ForgotStorePasswordSchema, ResetStorePasswordSchema, updateStorePasswordSchema } from "../schemas/StorePasswordSchema";
import StoreAuthMiddleware from "../../../middlewares/StoreAuthMiddleware";


const storePasswordRouter = Router();
const forgotCustomerPasswordController = new ForgotStorePasswordController();
const resetCustomerPasswordController =  new ResetStorePasswordController();
const updateCustomerPasswordControlers = new UpdateStorePasswordControlers();

storePasswordRouter.post('/forgot', ForgotStorePasswordSchema, forgotCustomerPasswordController.create,);
storePasswordRouter.patch('/reset', ResetStorePasswordSchema, resetCustomerPasswordController.create);
storePasswordRouter.patch('/update/:id', updateStorePasswordSchema, StoreAuthMiddleware.execute, AuthCorrectId.execute, updateCustomerPasswordControlers.create);


export default storePasswordRouter;