import { Router } from "express";
import modRouter from "./mods/modRouter.ts";
import pageRouter from "./pages/pageRouter.ts";

const viewsRouter = Router();
viewsRouter.use("/mod", modRouter)
viewsRouter.use('/page',pageRouter)
export default viewsRouter;