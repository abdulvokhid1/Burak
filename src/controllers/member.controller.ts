import { Request, Response } from "express";
import {T} from "../libs/types/common"
import MemberService from "../models/Member.service";
import {Member, MemberInput,LoginInput} from '../libs/types/member'
import Erros from "../libs/Errors";
import AuthService from "../models/Auth.service";
import { token } from "morgan";


const memberService = new MemberService();
const authService = new AuthService();


const memberController: T = {};

memberController.signup = async (req:Request, res:Response)=>{
    try{
        console.log("signup");
        console.log("body:", req.body);

        const input:MemberInput = req.body,
        result:Member = await memberService.signup(input),
        token = await authService.createToken(result);
        console.log("token:", token);

        res.json({member:result})
    } catch(err){
        console.log("ERROR, signup", err);
        if( err instanceof Erros) res.status(err.code).json(err);
        else res.status(Erros.standard.code).json(Erros.standard )
        // res.json({})
        
    }
    
};
memberController.login = async(req:Request, res:Response)=>{
    try{
        console.log("login");
        const input:LoginInput = req.body,
        result = await memberService.login(input),
        token = await authService.createToken(result);
        console.log("token => ", token)

        res.json({member:result})
    } catch(err){
        console.log("ERROR, login", err)
        if( err instanceof Erros) res.status(err.code).json(err);
        else res.status(Erros.standard.code).json(Erros.standard )
    }
    
};

export default memberController;