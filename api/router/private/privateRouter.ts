import { Router, Request, Response, } from "express";
import Dashboard from "../../views/pages/Dashboard/home";

const privateRouter = Router()

privateRouter.get('/home',(req:Request,res:Response)=>{
    try {
        res.status(200).send(Dashboard())
    } catch (error) {
        res.status(500).send({msg:'Internal server error'})
    }
})

export default privateRouter;