import { Router } from "express";
import viewsRouter from "./views/viewRouter.ts";
import apiRouter from "./client/clientRouter.ts";
const router = Router();

router.get("/", (req, res) => {
    res.status(200).send("Hello from the API!");
})

router.use("/views",viewsRouter)
router.use("/api",apiRouter)

export default router;