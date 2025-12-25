import 'express'

declare global{
    namespace Express{
       export interface Request{
           publicKey?:string
           walletExists?:boolean
           session?:{publickey?:string} 
           params?:{tmpl:string,client:string}|string
        }
    }
}

