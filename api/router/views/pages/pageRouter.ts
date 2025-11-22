import { Router } from "express";
import serve from "../../../views/pages/serve.ts";

const pageRouter = Router();
pageRouter.get('/serve',(req,res)=>
{
    try{
    res.status(200).send(serve());
    console.log("App page has been served")
    }   
    catch(err){
      res.status(500).send({msg:"Error loading Home page",err});
    }
}); 
export default pageRouter;