import { Router } from "express";
import customersRouter from "../../../../modules/customers/infra/http/routes/CustomerRoutes";
import sessionCustomerRouter from "../../../../modules/customers/infra/http/routes/SessionCustomerRoutes";
import customerPasswordRouter from "../../../../modules/customers/infra/http/routes/CustomerPasswordRoutes";

const routes = Router();

routes.get('/health', (req, res) =>{
    return res.json({message:'routes on road'});
});

routes.use('/customers', customersRouter);
routes.use('/customers/sessions', sessionCustomerRouter);
routes.use('/customers/password', customerPasswordRouter)


export default routes;