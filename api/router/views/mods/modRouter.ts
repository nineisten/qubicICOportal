import { Router } from "express";
import MainHeader from "../../../views/mods/main_header.ts"
import AppFrame from "../../../views/mods/app_frame.ts"

const modRouter = Router();
modRouter.get("/main-header", (req, res) => {
  try {
    res.status(200).send(MainHeader(true));
    console.log("Main Header component served")
  } catch (err) {
    res.status(500).send({msg:"Error loading Main Header component",err});
  }
});
modRouter.get("/app-frame", (req, res) => {
   try {
    res.status(200).send(AppFrame(''));
    console.log("App Frame component served")
  } catch (err) {
    res.status(500).send({msg:"Error loading AppFrame component",err});
  }
})
export default modRouter;