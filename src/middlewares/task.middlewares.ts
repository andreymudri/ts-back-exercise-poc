import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

export function taskCheck(schema: Schema){
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req.body);
  
      if (error) {
          console.log(error);
        return res.status(400).send(error);
        }  
        
      next();
    };
  };