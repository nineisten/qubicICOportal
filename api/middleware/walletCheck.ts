import { Request, Response, NextFunction } from "express";


export default async function WalletCheck (req:Request,res:Response,next:NextFunction){
    try{
        let keyFromSession = req.session?.publickey
        if (keyFromSession && /^[A-Z]{60}$/.test(keyFromSession)){
            req.publicKey=keyFromSession
         }
         next()
    }catch(err){
        console.error(err)
        next(err)
    }

}