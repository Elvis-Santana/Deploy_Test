
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { validationCreate } from '../../middleware/ValidationUser';



interface  UserInfo  {
    nome:string;
    email:string;
    senha:string;
}


const model :Array<UserInfo> =[];


export const CreateValidation =async  (req:Request<{},{},UserInfo>,res:Response,next:NextFunction)=>{


   try{
        const {nome,email,senha} = await req.body;

        const ErrorsCreate = await validationCreate(nome,email,senha);
       

        return ErrorsCreate.length ==0?next():res.json(ErrorsCreate)
   }catch(errr){
      return  res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({Erro:"Erro no servidor"});
   }
   
    
}


export const Create =async (req:Request<{},{},UserInfo>,res:Response,next:NextFunction)=>{

    const info = req.body;
    await model.push(info);
    return res.json(model);
 
}



