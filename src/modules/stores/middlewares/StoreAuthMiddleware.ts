import {Request, Response, NextFunction } from "express";
import AppError from "../../../shared/errors/AppError";
import { Secret, verify } from "jsonwebtoken";
import { ITokenPayload } from "../../../shared/models/ITokenPayload";



export default class StoreAuthMiddleware{
    static execute (request: Request, response: Response, next: NextFunction): void{
        const authHeader = request.headers.authorization;

        if(!authHeader){
            throw new AppError('JWT TOKEN is Missing', 401)
        }

        const [, token] = authHeader.split(' ');

        try{
            const decodedToken = verify(token, process.env.STORE_SECRET as Secret)

            const { sub } = decodedToken as ITokenPayload;

            request.customer = {
                id: sub
            }
            return next()
        }catch (error){
            throw new AppError('Token Invalido', 401)
        }
    }

}