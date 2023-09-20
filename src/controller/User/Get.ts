
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { validationCreate } from '../../middleware/ValidationUser';




export const getAll =async (req:Request,res:Response,next:NextFunction)=>{

    return await res.status(StatusCodes.OK).json({hello:"WOLRD"})
 
 
}
