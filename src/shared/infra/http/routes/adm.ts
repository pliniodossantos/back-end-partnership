import { Router } from "express";
import AdmconsulantsRouter from "../../../../modules/admin/infra/http/routes/AdmConsulantsRoutes";
import AdmcustomersRouter from "../../../../modules/admin/infra/http/routes/AdmCustomersRoutes";
import admOrdersRouter from "../../../../modules/admin/infra/http/routes/AdmOrdersRoutes";
import admPasswordRouter from "../../../../modules/admin/infra/http/routes/AdmPasswordRoutes";
import admRouter from "../../../../modules/admin/infra/http/routes/AdmRoutes";
import AdmstoresRouter from "../../../../modules/admin/infra/http/routes/AdmStoreRoutes";
import sessionAdmRouter from "../../../../modules/admin/infra/http/routes/SessionAdmRoutes";

const routesAdm = Router();

routesAdm.use('/admin/password', admPasswordRouter);
routesAdm.use('/admin/sessions', sessionAdmRouter);
routesAdm.use('/admin/consulants', AdmconsulantsRouter);
routesAdm.use('/admin/customers', AdmcustomersRouter);
routesAdm.use('/admin/stores', AdmstoresRouter);
routesAdm.use('/admin/order', admOrdersRouter );
routesAdm.use('/admin', admRouter);

export default routesAdm;