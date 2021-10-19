import express, { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageControlller } from "./controllers/CreateMessageControlller";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfilerUserController } from "./controllers/ProfilerUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle)

router.post("/messages", ensureAuthenticated, new CreateMessageControlller().handle)

router.get("/messages/last3", new GetLast3MessagesController().handle)

router.get("/profile", ensureAuthenticated, new ProfilerUserController().handle)

export { router }