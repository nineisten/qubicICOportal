import { Router } from "express";
import MainHeader from "../../views/mods/main_header"
import Footer from "../../views/components/elements/footer"
import Chaindata from "../../views/mods/chaindata"
import WalletCheck from "../../middleware/walletCheck";
import Div from "../../views/components/elements/div";
import Sidebar from "../../views/mods/sidebar";
import DashFrame from "../../views/mods/dash_frame";
import Main from "../../views/components/elements/main";
import MainDash from "../../views/mods/main_dash";

const modRouter = Router();

modRouter.get("/main-header",WalletCheck, (req, res) => {
  try {
    if (!req.publicKey){
      res.status(200).send(MainHeader({}))
      return
    }
    res.status(200).send(MainHeader({wallet:req.publicKey,'hx-swap-oob':'true'}));
    return
  } catch (err) {
    res.status(500).send({msg:"Error loading Main Header component",err});
  }
});

modRouter.get("/chaindata", (req, res) => {

  try {
    res.status(200).send(Chaindata());
    return
  } catch (err) {
    res.status(500).send({msg:"Error loading Chaindata component",err});
  }
});
modRouter.get("/main-dash", (req, res) => {

  try {
    res.status(200).send(MainDash({content:''}));
    return
  } catch (err) {
    res.status(500).send({msg:"Error loading Main-dash component",err});
  }
});

modRouter.get("/main-footer", (req, res) => {
  try {
    res.status(200).send(Footer(
        {
        content:/*html*/`
          &copy; 2025 Qubic ICO
        `,id:'main_footer'}));
    return
  } catch (err) {
    res.status(500).send({msg:"Error loading Main Footer component",err});
  }
});

modRouter.get("/sidebar", (req, res) => {
  try {
    res.status(200).send(Sidebar());
    return
  } catch (err) {
    res.status(500).send({msg:"Error loading Main Footer component",err});
  }
});

modRouter.post("/wallet-connect",(req,res)=>{
  try {
    const fauxPublicKey = 'AAAABBBBCCCCDDDDEEEEFFFFGGGGHHHHIIIIJJJJKKKKLLLLMMMMMMNNNNNN';

    (req.session as any).publickey = fauxPublicKey;

    if (req.walletExists){
      res.status(400).redirect('/')
      return
    }
    const loggedInHeader = MainHeader({
      wallet:fauxPublicKey,
      'hx-swap-oob':'outerHtml:#connect_section',
      'hx-trigger':'load'
    })
    const loginMessage = Div({
      content:/*html*/`
        <p>Wallet connected successfully!</p>
        <p>Your public key: ${fauxPublicKey}</p>
        <a href="/home">Go to Home</a>
      `,class:'connect-success',
      'hx-swap-oob':'innerHtml:#connect_section',

    })
    
    res.status(200).send(loggedInHeader+loginMessage)
    return
  } catch (err) {
    res.status(500).send({msg:"Error connecting wallet",err});
  }
});

modRouter.post("/disconnect",(req,res)=>{
  try {
    const fauxPublicKey = '';

    (req.session as any).publickey = fauxPublicKey;

    if (req.walletExists){
      res.status(400).redirect('/')
      return
    }

    const loggedOutHeader = MainHeader({
      wallet:req.publicKey,
      'hx-swap-oob':'outerHtml:#disconnect_section',
      'hx-trigger':'load'
    })

    
      const logoutMsg = Div({
      content:/*html*/`
        <p>Wallet Disconnected successfully!</p>
        <a href="/home">Go to Home</a>
      `,class:'disconnect-success',
      'hx-swap-oob':'innerHtml:#disconnect_section',

    })
    res.status(200).send(loggedOutHeader + logoutMsg)
    return
  } catch (err) {
    res.status(500).send({msg:"Error connecting wallet",err});
  }
});

export default modRouter;
