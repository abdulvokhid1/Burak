import { Request, Response, response } from "express";
import {T} from "../libs/types/common"
import MemberService from "../models/Member.service";
import {Member, MemberInput,LoginInput} from '../libs/types/member'
import Erros, { HttpCode, Message } from "../libs/Errors";
import AuthService from "../models/Auth.service";
import { token } from "morgan";
import { AUTH_TIMER } from "../libs/config";


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
        res.cookie("accessToken", token, {
            maxAge: AUTH_TIMER * 3600 * 1000,
            httpOnly: false,
        })

        res.status(HttpCode.CREATE).json({member:result, accessToken : token})
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

        res.cookie("accessToken", token, {
            maxAge: AUTH_TIMER * 3600 * 1000,
            httpOnly: false,
        })

        res.status(HttpCode.OK).json({member:result, accessToken : token})
    } catch(err){
        console.log("ERROR, login", err)
        if( err instanceof Erros) res.status(err.code).json(err);
        else res.status(Erros.standard.code).json(Erros.standard )
    }
    
};

memberController.verifyAuth = async (req: Request, res:Response) => {
try{
    let member = null;
   const token = req.cookies["accessToken"];
   if (token) member = await authService.checkAuth(token);
   if(!member) throw new Erros(HttpCode.UNAUTHORIZED, Message.NOT_AUTHENTICATED);

   res.status(HttpCode.OK).json({member:member})

} catch(err) {
    console.log("ERROR, verifyAuth", err)
        if( err instanceof Erros) res.status(err.code).json(err);
        else res.status(Erros.standard.code).json(Erros.standard )
}
}
export default memberController;