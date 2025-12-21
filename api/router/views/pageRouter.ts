import { Router } from "express";
import Home from "../../views/pages/index.ts";
import About from "../../views/pages/About.ts";
import Contact from "../../views/pages/Contact.ts";
import pageNotFound from "../../views/pages/pagenotfound.ts";
import Connect from "../../views/pages/connect.ts";
import Disconnect from "../../views/pages/disconnect.ts";

const pageRouter = Router();

pageRouter.get('/home',(req,res)=>
{
    try{
    res.status(200).send(Home());
    }   
    catch(err){
      res.status(500).send({msg:"Error loading Home page",err});
    }
}); 
pageRouter.get('/about',(req,res)=>
{
    try{
    res.status(200).send(About());
    }   
    catch(err){
      res.status(500).send({msg:"Error loading Home page",err});
    }
});
pageRouter.get('/contact',(req,res)=>
{
    try{
    res.status(200).send(Contact());
    }   
    catch(err){
      res.status(500).send({msg:"Error loading Home page",err});
    }
}) 
pageRouter.get('/connect',(req,res)=>{
  try {
    res.status(200).send(Connect())
  } catch (err) {
    res.send(500).send({msg:"Error loading Home page",err})
  }
})

pageRouter.get('*all',(req,res)=>
{
    try{
    res.status(200).send(pageNotFound());
    }   
    catch(err){
      res.status(500).send({msg:"Error loading Home page",err});
    }
});
export default pageRouter;