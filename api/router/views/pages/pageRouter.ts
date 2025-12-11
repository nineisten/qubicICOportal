import { Router } from "express";
import Home from "../../../views/pages/index.ts";
import About from "../../../views/pages/About.ts";
import Contact from "../../../views/pages/Contact.ts";

const pageRouter = Router();

pageRouter.get('/home',(req,res)=>
{
    try{
    res.status(200).send(Home());
    console.log("Home panel has been served")
    }   
    catch(err){
      res.status(500).send({msg:"Error loading Home page",err});
    }
}); 
pageRouter.get('/about',(req,res)=>
{
    try{
    res.status(200).send(About());
    console.log("about panel has been served")
    }   
    catch(err){
      res.status(500).send({msg:"Error loading Home page",err});
    }
});
pageRouter.get('/contact',(req,res)=>
{
    try{
    res.status(200).send(Contact());
    console.log("Contact panel has been served")
    }   
    catch(err){
      res.status(500).send({msg:"Error loading Home page",err});
    }
}) 
export default pageRouter;