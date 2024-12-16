import { Router } from "express";
import { approveAdmSchema } from "../schemas/AdmSchema";
import AdmAuthMiddleware from "../../../middlewares/AdmAuthMiddleware";
import ApproveAdmcontroller from "../controllers/admin/ApproveAdmcontroller";
import { createAdmOrdertSchema, deletAdmOrdertSchema, listAdmOrdertSchema } from "../schemas/AdmOrdersSchema";
import AdmCreateOrdersControllers from "../controllers/orders/AdmCreateOrdersControllers";
import AdmOrdersControllers from "../controllers/orders/AdmOrdersControllers";
import AdmListConsulantOrdersControllers from "../controllers/orders/AdmListConsulantOrdersControllers";
import AdmListCustomerOrdersControllers from "../controllers/orders/AdmListCustomerOrdersControllers";
import AdmListStoreOrdersControllers from "../controllers/orders/AdmListStoreOrdersControllers";


const admOrdersRouter = Router();
const approveAdmcontroller = new ApproveAdmcontroller();
const admCreateOrdersControllers = new AdmCreateOrdersControllers();
const admOrdersControllers = new AdmOrdersControllers();
const admListConsulantOrdersControllers = new AdmListConsulantOrdersControllers();
const admListCustomerOrdersControllers = new AdmListCustomerOrdersControllers();
const admListStoreOrdersControllers = new AdmListStoreOrdersControllers();

admOrdersRouter.get('/', AdmAuthMiddleware.execute, admOrdersControllers.index)
admOrdersRouter.post('/create/', createAdmOrdertSchema, AdmAuthMiddleware.execute, admCreateOrdersControllers.create)
admOrdersRouter.patch('/approve/', approveAdmSchema, AdmAuthMiddleware.execute, approveAdmcontroller.update)
admOrdersRouter.delete('/:id', deletAdmOrdertSchema, AdmAuthMiddleware.execute, admOrdersControllers.delete)
admOrdersRouter.post('/consulant/',listAdmOrdertSchema, AdmAuthMiddleware.execute, admListConsulantOrdersControllers.show)
admOrdersRouter.post('/customer',listAdmOrdertSchema, AdmAuthMiddleware.execute, admListCustomerOrdersControllers.show)
admOrdersRouter.post('/store',listAdmOrdertSchema, AdmAuthMiddleware.execute, admListStoreOrdersControllers.show)


export default admOrdersRouter;