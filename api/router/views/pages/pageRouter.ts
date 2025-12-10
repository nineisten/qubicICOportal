import { Router } from "express";
import serve from "../../../views/pages/serve.ts";
import Home from "../../../views/pages/index.ts";
import About from "../../../views/pages/about.ts";
import Contact from "../../../views/pages/contact.ts";

const pageRouter = Router();
// pageRouter.get('/serve',(req,res)=>
// {
//     try{
//     res.status(200).send(serve('url'));
//     console.log("App Frame has launched successfully")
//     }   
//     catch(err){
//       res.status(500).send({msg:"Error loading Home page",err});
//     }
// }); 
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
    console.log("Home panel has been served")
    }   
    catch(err){
      res.status(500).send({msg:"Error loading Home page",err});
    }
});
pageRouter.get('/contact',(req,res)=>
{
    try{
    res.status(200).send(Contact());
    console.log("Home panel has been served")
    }   
    catch(err){
      res.status(500).send({msg:"Error loading Home page",err});
    }
}) 
export default pageRouter;