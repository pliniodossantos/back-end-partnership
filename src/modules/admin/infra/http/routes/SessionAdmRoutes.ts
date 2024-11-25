import { Router } from "express";
import SessionsAdmControllers from "../controllers/admin/SessionsAdmControllers";
import { sessionAdmSchema } from "../schemas/SessionAdmSchema";

const sessionAdmRouter = Router();
const sessionsAdmControllers = new SessionsAdmControllers();

sessionAdmRouter.post('/', sessionAdmSchema, sessionsAdmControllers.Create);

export default sessionAdmRouter;