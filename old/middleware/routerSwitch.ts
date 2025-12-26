import { NextFunction,Response, Request,Router } from "express";
import privateRouter from "../router/private/privateRouter";

const routerSwitch = Router()

routerSwitch.use((req:Request,res:Response,next:NextFunction)=>{
     try {
        if(req.publicKey){
            return next()
        }
        return next('router')
    } catch (err) {
        res.status(500).send(err)
    }
})
routerSwitch.use(privateRouter)//triggers if wallet is connected

export default routerSwitch;