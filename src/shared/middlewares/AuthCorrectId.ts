import {Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";
import { jwtDecode } from "jwt-decode";



export default class AuthCorrectId{
    static execute (request: Request, response: Response, next: NextFunction): void{
        const authHeader = request.headers.authorization;
        const idDestino = request.params.id;
        if(!authHeader){
            throw new AppError("token invalido ou inexistente", 400)
        }
        const [, token] = authHeader.split(' ');
        const decodedId = jwtDecode(token);
        if (decodedId.sub != idDestino) {
            throw new AppError("Você não tem autoriazação para este usuário", 401)
        }

        return next()
    }

        
    }

