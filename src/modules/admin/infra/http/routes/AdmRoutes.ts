import { Router } from "express";
import Admcontrollers from "../controllers/admin/Admcontrollers";
import { approveAdmSchema, createAdmSchema, idParamsValidate, updateAdmSchema } from "../schemas/AdmSchema";
import AdmAuthMiddleware from "../../../middlewares/AdmAuthMiddleware";
import AuthCorrectId from "../../../../../shared/middlewares/AuthCorrectId";
import ApproveAdmcontroller from "../controllers/admin/ApproveAdmcontroller";




const admRouter = Router();
const admControllers = new Admcontrollers();

admRouter.get('/:id',  idParamsValidate , AdmAuthMiddleware.execute, AuthCorrectId.execute, admControllers.show);
admRouter.post('/send' , admControllers.send);
admRouter.post('/create', createAdmSchema , admControllers.create);
admRouter.put('/:id', updateAdmSchema, AdmAuthMiddleware.execute, AuthCorrectId.execute, admControllers.update);
admRouter.delete('/:id', idParamsValidate, AdmAuthMiddleware.execute, AuthCorrectId.execute, admControllers.delete);

export default admRouter;