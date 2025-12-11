import { Router } from "express";
import viewsRouter from "./views/viewRouter.ts";
import apiRouter from "./client/clientRouter.ts";

const router = Router();
router.use("/views",viewsRouter)
router.use("/api",apiRouter)

export default router;