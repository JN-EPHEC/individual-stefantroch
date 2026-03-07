import type { Request,Response, NextFunction } from "express";


export default function checkIdParam(req:Request,res:Response,next:NextFunction){
    const id = Number(req.params.id);
    if(isNaN(id)){
        return res.status(400).json({message: "Id invalide"});
    }
    next();

}

