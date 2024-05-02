import { NextFunction, Request, Response, request, response } from "express";
import {T} from "../libs/types/common"
import MemberService from "../models/Member.service";
import {Member, MemberInput,LoginInput, ExtendedRequest} from '../libs/types/member'
import Erros, { HttpCode, Message } from "../libs/Errors";
import AuthService from "../models/Auth.service";
import { token } from "morgan";
import { AUTH_TIMER } from "../libs/config";


const memberService = new MemberService();
const authService = new AuthService();


const memberController: T = {};

memberController.getRestaurant = async (req:Request, res:Response) => {
    try{
        console.log("getRestaurant");
        const result = await memberService.getRestaurant()

        res.status(HttpCode.OK).json(result);


    } catch(err){
        console.log("ERROR, getRestaurant", err);
        if( err instanceof Erros) res.status(err.code).json(err);
        else res.status(Erros.standard.code).json(Erros.standard )
        // res.json({})
        
    }
}

memberController.signup = async (req:Request, res:Response)=>{
    try{
        console.log("signup");

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

memberController.logout = (req: ExtendedRequest, res:Response) =>{
    try{
        console.log("logout");
        res.cookie("accessToken", null, {maxAge: 0, httpOnly: true});
        res.status(HttpCode.OK).json({ logout: true })
    } catch(err){
        if( err instanceof Erros) res.status(err.code).json(err);
        else res.status(Erros.standard.code).json(Erros.standard )
    }
};

memberController.getMemberdetail = async (req: ExtendedRequest, res:Response) =>{
    try{
        console.log("getMemberdetail");
        const result =  await memberService.getMemberDetail(req.member);
        

        res.status(HttpCode.OK).json(result);
    } catch(err){
        console.log("Error, getMemberDetail:", err);
        if( err instanceof Erros) res.status(err.code).json(err);
        else res.status(Erros.standard.code).json(Erros.standard )
    }
};

memberController.updateMember = async (req: ExtendedRequest, res:Response ) => {
    try{
        console.log("updateMember")
        const input: MemberInput = req.body;
        if(req.file) input.memberImage = req.file.path.replace(/\\/, "/");
        const result = await memberService.updateMember(req.member, input);

        res.status(HttpCode.OK).json(result) 
    } catch(err){
        console.log("Error, updateMember:", err);
        if( err instanceof Erros) res.status(err.code).json(err);
        else res.status(Erros.standard.code).json(Erros.standard )
    }
}

memberController.getTopUsers = async (req:Request, res: Response) => {
    try{
        console.log("getTopUsers")
        const result = await memberService.getTopUsers();

        res.status(HttpCode.OK).json(result)
    } catch(err){
        console.log("Error, getTopUsers:", err);
        if( err instanceof Erros) res.status(err.code).json(err);
        else res.status(Erros.standard.code).json(Erros.standard )
    }
}

memberController.verifyAuth = async (req: ExtendedRequest, res:Response, next: NextFunction) => {
try{
   const token = req.cookies["accessToken"];
   if (token) req.member = await authService.checkAuth(token);
   if(!req.member)
     throw new Erros(HttpCode.UNAUTHORIZED, Message.NOT_AUTHENTICATED);
   

   next();

} catch(err) {
    console.log("ERROR, verifyAuth", err)
        if( err instanceof Erros) res.status(err.code).json(err);
        else res.status(Erros.standard.code).json(Erros.standard )
}

};


memberController.retrieveAuth = async (req: ExtendedRequest, res:Response, next: NextFunction) => {
    try{
       const token = req.cookies["accessToken"];
       if (token) req.member = await authService.checkAuth(token);
    next();
    } catch(err) {
        console.log("ERROR, retrieveAuth", err);
        next();
    }
    }
export default memberController;