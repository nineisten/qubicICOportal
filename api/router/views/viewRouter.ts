import { Router } from "express";
import modRouter from "./mods/modRouter.ts";
import WalletCheck from "../../middleware/walletCheck.ts";
import routerSwitch from "../../middleware/routerSwitch.ts";

const viewsRouter = Router();
viewsRouter.use("/mod", modRouter)
viewsRouter.use('/page',WalletCheck,routerSwitch)
export default viewsRouter;