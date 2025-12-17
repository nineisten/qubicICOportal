import { NextFunction,Response, Request,Router } from "express";
import privateRouter from "../router/private/privateRouter";
import pageRouter from "../router/views/pages/pageRouter";



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
routerSwitch.use(privateRouter)
routerSwitch.use(pageRouter)

export default routerSwitch;