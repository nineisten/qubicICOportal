import { Request, Response, NextFunction } from "express";


export default async function WalletCheck (req:Request,res:Response,next:NextFunction){
    try{
            // req.publicKey = "QMHJNLMQRIBIREFIWVKYQELBFARBTDNYKIOBOFFYFGJYZSXJBVGBSUQGHSAM"
            if (req.publicKey && /^[A-Z]{60}$/.test(req.publicKey)) {
                return next();
            }
            return next()
    }catch(err){
        console.error(err)
    }

}