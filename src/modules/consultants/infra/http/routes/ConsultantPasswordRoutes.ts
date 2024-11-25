import { Router } from "express";
import AuthCorrectId from "../../../../../shared/middlewares/AuthCorrectId";
import ForgotConsultantPasswordController from "../controllers/ForgotConsultantPasswordController";
import ResetConsultantPasswordController from "../controllers/ResetConsultantPasswordController";
import UpdateConsultantPasswordController from "../controllers/UpdateConsultantPasswordController";
import { ForgotConsultantPasswordSchema, ResetConsultantPasswordSchema, updateConsultantPasswordSchema } from "../schemas/PasswordConsultantSchema";
import ConsultantAuthMiddleware from "../../../middlewares/ConsultantAuthMiddleware";


const consultantPasswordRouter = Router();
const forgotConsultantPasswordController = new ForgotConsultantPasswordController();
const resetConsultantPasswordController =  new ResetConsultantPasswordController();
const updateConsultantPasswordController = new UpdateConsultantPasswordController();

consultantPasswordRouter.post('/forgot', ForgotConsultantPasswordSchema, forgotConsultantPasswordController.create,);
consultantPasswordRouter.patch('/reset', ResetConsultantPasswordSchema, resetConsultantPasswordController.create);
consultantPasswordRouter.patch('/update/:id', updateConsultantPasswordSchema, ConsultantAuthMiddleware.execute, AuthCorrectId.execute, updateConsultantPasswordController.create);


export default consultantPasswordRouter;