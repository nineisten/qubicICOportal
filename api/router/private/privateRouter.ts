import { Router, Request, Response, } from "express";
import Dashboard from "../../views/pages/Dashboard/home";
import Disconnect from "../../views/pages/disconnect";

const privateRouter = Router()

privateRouter.get('/home',(req:Request,res:Response)=>{
    try {
        res.status(200).send(Dashboard())
    } catch (error) {
        res.status(500).send({msg:'Internal server error'})
    }
})
privateRouter.get('/disconnect',(req,res)=>{
  try {
    res.status(200).send(Disconnect())
  } catch (err) {
    res.send(500).send({msg:"Error loading Home page",err})
  }
})
export default privateRouter;