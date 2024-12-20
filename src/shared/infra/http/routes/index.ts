import { Router } from "express";
import customersRouter from "../../../../modules/customers/infra/http/routes/CustomerRoutes";
import sessionCustomerRouter from "../../../../modules/customers/infra/http/routes/SessionCustomerRoutes";
import customerPasswordRouter from "../../../../modules/customers/infra/http/routes/CustomerPasswordRoutes";
import storesRouter from "../../../../modules/stores/infra/http/routes/StoreRoutes";
import sessionStoreRoute from "../../../../modules/stores/infra/http/routes/SessionStoreRoutes";
import storePasswordRouter from "../../../../modules/stores/infra/http/routes/StorePasswordRoutes";
import consulantsRouter from "../../../../modules/consultants/infra/http/routes/ConsulantRoutes";
import sessionConsulantRouter from "../../../../modules/consultants/infra/http/routes/SessionConsultantRoutes";
import consultantPasswordRouter from "../../../../modules/consultants/infra/http/routes/ConsultantPasswordRoutes";

const routes = Router();

routes.get('/health', (req, res) =>{
    return res.json({message:'routes on road'});
});



routes.use('/customers/sessions', sessionCustomerRouter);
routes.use('/customers/password', customerPasswordRouter);
routes.use('/customers', customersRouter);


routes.use('/stores/sessions', sessionStoreRoute);
routes.use('/stores/password', storePasswordRouter);
routes.use('/stores', storesRouter);


routes.use('/consulants/sessions', sessionConsulantRouter);
routes.use('/consulants/password', consultantPasswordRouter);
routes.use('/consulants', consulantsRouter);


export default routes;