import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {res.status(200).send(`hello from server`)})
router.get("/hello", (req, res) => {
  res.status(200).send(`<h1>Hello from server!</h1>`)
});


export default router;