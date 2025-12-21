import { Router } from "express";
import modRouter from "./modRouter.ts";
import WalletCheck from "../../middleware/walletCheck.ts";
import routerSwitch from "../../middleware/routerSwitch.ts";
import pageRouter from "./pageRouter.ts";

const viewsRouter = Router();
viewsRouter.use("/mod", modRouter)
viewsRouter.use('/page',WalletCheck,routerSwitch,pageRouter)
export default viewsRouter;