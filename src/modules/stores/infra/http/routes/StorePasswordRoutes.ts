import { Router } from "express";
import AuthCorrectId from "../../../../../shared/middlewares/AuthCorrectId";
import ForgotStorePasswordController from "../controllers/ForgotStorePasswordController";
import ResetStorePasswordController from "../controllers/ResetStorePasswordController";
import UpdateStorePasswordControlers from "../controllers/UpdateStorePasswordControlers";
import { ForgotStorePasswordSchema, ResetStorePasswordSchema, updateStorePasswordSchema } from "../schemas/StorePasswordSchema";
import StoreAuthMiddleware from "../../../middlewares/StoreAuthMiddleware";


const storePasswordRouter = Router();
const forgotStorePasswordController = new ForgotStorePasswordController();
const resetStorePasswordController =  new ResetStorePasswordController();
const updateStorePasswordControlers = new UpdateStorePasswordControlers();

storePasswordRouter.post('/forgot', ForgotStorePasswordSchema, forgotStorePasswordController.create,);
storePasswordRouter.patch('/reset', ResetStorePasswordSchema, resetStorePasswordController.create);
storePasswordRouter.patch('/update/:id', updateStorePasswordSchema, StoreAuthMiddleware.execute, AuthCorrectId.execute, updateStorePasswordControlers.create);


export default storePasswordRouter;