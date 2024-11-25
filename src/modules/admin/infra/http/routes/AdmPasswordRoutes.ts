import { Router } from "express";
import { ForgotAdmPasswordSchema, ResetAdmPasswordSchema, updateAdmPasswordSchema } from "../schemas/PasswordAdmSchema";
import ForgotAdmPasswordController from "../controllers/admin/ForgotAdmPasswordController";
import ResetAdmPasswordController from "../controllers/admin/ResetAdmPasswordController";
import UpdateAdmPasswordControlers from "../controllers/admin/UpdateAdmPasswordControlers";
import AdmAuthMiddleware from "../../../middlewares/AdmAuthMiddleware";
import AuthCorrectId from "../../../../../shared/middlewares/AuthCorrectId";

const admPasswordRouter = Router();

const forgotAdmPasswordController = new ForgotAdmPasswordController();
const resetAdmPasswordController = new ResetAdmPasswordController();
const updateAdmPasswordControlers = new UpdateAdmPasswordControlers();

admPasswordRouter.post('/forgot', ForgotAdmPasswordSchema, forgotAdmPasswordController.create,);
admPasswordRouter.patch('/reset', ResetAdmPasswordSchema, resetAdmPasswordController.create);
admPasswordRouter.patch('/update/:id', updateAdmPasswordSchema, AdmAuthMiddleware.execute, AuthCorrectId.execute, updateAdmPasswordControlers.create);

export default admPasswordRouter;