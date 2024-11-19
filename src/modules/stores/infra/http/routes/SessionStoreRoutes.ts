import { Router } from "express";
import SessionsStoreController from "../controllers/SessionsStoreController";
import { sessionStoreSchema } from "../schemas/SessionStoreSchema";


const sessionStoreRoute = Router();
const sessionsStoreController = new SessionsStoreController();

sessionStoreRoute.post('/', sessionStoreSchema, sessionsStoreController.Create);

export default sessionStoreRoute;