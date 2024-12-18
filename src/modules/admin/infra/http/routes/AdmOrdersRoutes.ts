import { Router } from "express";
import { approveAdmSchema } from "../schemas/AdmSchema";
import AdmAuthMiddleware from "../../../middlewares/AdmAuthMiddleware";
import ApproveAdmcontroller from "../controllers/admin/ApproveAdmcontroller";
import { createAdmOrdertSchema, decreaseConsulantAdmOrdertSchema, decreaseCustomerAdmOrdertSchema, deletAdmOrdertSchema, listAdmOrdertSchema } from "../schemas/AdmOrdersSchema";
import AdmCreateOrdersControllers from "../controllers/orders/AdmCreateOrdersControllers";
import AdmOrdersControllers from "../controllers/orders/AdmOrdersControllers";
import AdmListConsulantOrdersControllers from "../controllers/orders/AdmListConsulantOrdersControllers";
import AdmListCustomerOrdersControllers from "../controllers/orders/AdmListCustomerOrdersControllers";
import AdmListStoreOrdersControllers from "../controllers/orders/AdmListStoreOrdersControllers";
import AdmDecreasePointsCustomerControllers from "../controllers/orders/AdmDecreasePointsCustomerControllers";
import AdmDecreasePointsConsulantControllers from "../controllers/orders/AdmDecreasePointsConsulantControllers";


const admOrdersRouter = Router();
const approveAdmcontroller = new ApproveAdmcontroller();
const admCreateOrdersControllers = new AdmCreateOrdersControllers();
const admOrdersControllers = new AdmOrdersControllers();
const admListConsulantOrdersControllers = new AdmListConsulantOrdersControllers();
const admListCustomerOrdersControllers = new AdmListCustomerOrdersControllers();
const admListStoreOrdersControllers = new AdmListStoreOrdersControllers();
const admDecreasePointsCustomerControllers = new AdmDecreasePointsCustomerControllers();
const admDecreasePointsConsulantControllers = new AdmDecreasePointsConsulantControllers();


admOrdersRouter.get('/', AdmAuthMiddleware.execute, admOrdersControllers.index)
admOrdersRouter.post('/create/', createAdmOrdertSchema, AdmAuthMiddleware.execute, admCreateOrdersControllers.create)
admOrdersRouter.patch('/approve/', approveAdmSchema, AdmAuthMiddleware.execute, approveAdmcontroller.update)
admOrdersRouter.delete('/:id', deletAdmOrdertSchema, AdmAuthMiddleware.execute, admOrdersControllers.delete)
admOrdersRouter.post('/consulant/',listAdmOrdertSchema, AdmAuthMiddleware.execute, admListConsulantOrdersControllers.show)
admOrdersRouter.post('/customer',listAdmOrdertSchema, AdmAuthMiddleware.execute, admListCustomerOrdersControllers.show)
admOrdersRouter.post('/store',listAdmOrdertSchema, AdmAuthMiddleware.execute, admListStoreOrdersControllers.show)
admOrdersRouter.post('/decrease/customer', decreaseCustomerAdmOrdertSchema, AdmAuthMiddleware.execute, admDecreasePointsCustomerControllers.decrease)
admOrdersRouter.post('/decrease/consulant', decreaseConsulantAdmOrdertSchema, AdmAuthMiddleware.execute, admDecreasePointsConsulantControllers.decrease)


export default admOrdersRouter;