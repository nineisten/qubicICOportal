import { Router } from "express";
import MainHeader from "../../../views/mods/main_header"
import Footer from "../../../views/components/elements/footer"
import Chaindata from "../../../views/mods/chaindata"

const modRouter = Router();
modRouter.get("/main-header", (req, res) => {
  try {
    res.status(200).send(MainHeader({}));
    console.log("Main Header component served")
  } catch (err) {
    res.status(500).send({msg:"Error loading Main Header component",err});
  }
});
modRouter.get("/chaindata", (req, res) => {
  try {
    res.status(200).send(Chaindata());
    console.log("Chaindata component served")
  } catch (err) {
    res.status(500).send({msg:"Error loading Chaindata component",err});
  }
});
modRouter.get("/main-footer", (req, res) => {
  try {
    res.status(200).send(Footer(
        {
        content:/*html*/`
          &copy; 2025 Qubic Ico
        `,id:'main_footer'}));
    console.log("Main footer component served")
  } catch (err) {
    res.status(500).send({msg:"Error loading Main Footer component",err});
  }
});


export default modRouter;