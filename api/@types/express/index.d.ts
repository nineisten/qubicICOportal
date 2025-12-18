import 'express'

declare global{
    namespace Express{
       export interface Request{
           publicKey?:string;
           walletExists?:boolean
        }
    }
}

