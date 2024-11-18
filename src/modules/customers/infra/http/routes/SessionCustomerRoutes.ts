import { Router } from "express";
import SessionsCustomerControllers from "../controllers/SessionsCustomersControllers";
import { sessionCustomerSchema } from "../schemas/SessionCustomerSchema";


const sessionCustomerRouter = Router();
const sessionsCustomerController = new SessionsCustomerControllers();

sessionCustomerRouter.post('/', sessionCustomerSchema, sessionsCustomerController.Create);

export default sessionCustomerRouter;