import { Router, Request, Response, } from "express";
import Disconnect from "../../views/pages/disconnect";
import Activity from "../../views/pages/dashboard/activity";
import ICO from "../../views/pages/dashboard/ico";
import Launch from "../../views/pages/dashboard/launch";
import Home from "../../views/pages/dashboard/index.ts";


const privateRouter = Router()

privateRouter.get('/home',(req:Request,res:Response)=>{
    try {
        res.status(200).send(Home())
    } catch (err) { 
        res.status(500).send({msg:"Error loading Home page",err})
    }
})

privateRouter.get('/activity',(req:Request,res:Response)=>{
  try {
    res.status(200).send(Activity())
    return
  } catch (err) {
    res.send(500).send({msg:"Error loading Home page",err})
  }
})
privateRouter.get('/ico',(req,res)=>{
  try {
    res.status(200).send(ICO())
  } catch (err) {
    res.send(500).send({msg:"Error loading Home page",err})
  }
})
privateRouter.get('/launch',(req,res)=>{
  try {
    res.status(200).send(Launch())
  } catch (err) {
    res.send(500).send({msg:"Error loading Home page",err})
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