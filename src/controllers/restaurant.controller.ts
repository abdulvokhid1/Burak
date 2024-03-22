import { NextFunction, Request, Response } from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";
import Erros from "../libs/Errors";

const memberService = new MemberService();

const restaurantController: T = {};

restaurantController.goHome = (req:Request, res:Response)=>{
    try{
        console.log("goHome")
        res.render("home")
    } catch(err){
        console.log("ERROR, goHome", err)
        res.redirect("/admin")


    }
};

restaurantController.getSignup = (req:Request, res:Response)=>{
    try{
        res.render("signup")
    } catch(err){
        console.log("ERROR, getSignup", err)
        res.redirect("/admin")

    }
    
};
restaurantController.getLogin = (req:Request, res:Response)=>{
    try{
        res.render("login")
    } catch(err){
        console.log("ERROR, getLogin", err)
        res.redirect("/admin")
    }
};

restaurantController.processSignup = async (req:AdminRequest, res:Response)=>{
    try{
        console.log("processSignup");
        console.log("req.body:", req.body)
        const file = req.file;
        if(!file)
        throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);

        const newMember:MemberInput = req.body;
        newMember.memberImage = file?.path;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);
        //TODO: SESSIONS AUTHENTICATION
        req.session.member = result;
        req.session.save(function () {
        res.redirect('/admin/product/all');
        })
    } catch(err){
        console.log("ERROR, processSignup", err);
        const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace('/admin/signup') </script>`
    );
    }
    
};

restaurantController.processLogin = async(req:AdminRequest, res:Response)=>{
    try{
        console.log("processLogin");

        const input:LoginInput = req.body;
        const result = await memberService.processLogin(input);
        //TODO: SESSIONS AUTHENTICATION
        
        req.session.member = result;
        req.session.save(function(){
            res.redirect("/admin/product/all");
        });

    } catch(err){
        console.log("ERROR, processLogin", err);
        const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace('/admin/login') </script>`
    );
    }
    
};

restaurantController.logout = async(req:AdminRequest, res:Response)=>{
    try{
        console.log("processLogin");

        req.session.destroy(function(){
            res.redirect('/admin')
        })

    } catch(err){
        console.log("ERROR, processLogin", err)
        res.redirect("/admin")
    }
    
};  

restaurantController.getUsers = async (req:Request, res:Response)=>{
    try{
        console.log("getUsers")
        const result = await memberService.getUsers();
        console.log("result", result)
        res.render("users", { users: result })
    } catch(err){
        console.log("ERROR, getUsers", err)
        res.redirect("/admin/login")
    }
};

restaurantController.updateChosenUser = async (req:Request, res:Response)=>{
    try{
        console.log("updateChosenUser")
        const result = await  memberService.updateChosenUser(req.body);

        res.status(HttpCode.OK).json({ data: result })
    } catch(err){
        console.log("ERROR, updateChosenUser", err);
        if( err instanceof Erros) res.status(err.code).json(err);
        else res.status(Erros.standard.code).json(Erros.standard )
    }
};



restaurantController.checkAuthSession = async (
    req: AdminRequest,
    res: Response
  ) => {
    try {
      console.log("checkAuthSession");
      if (req.session?.member)
      res.send(`<script> alert("${req.session.member.memberNick}") </script>`);
    else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>`);
    } catch (err) {
      console.log("Error, checkAuthSession:", err);
      res.send(err);
    }
  };

  restaurantController.verifyRestaurant = (
    req: AdminRequest,
    res: Response,
    next:NextFunction,
  ) => {
        if(req.session?.member?.memberType === MemberType.RESTAURANT){
            req.member = req.session.member;
            next();
        } else{
            const message = Message.NOT_AUTHENTICATED;
            res.send(`<script> alert("${message}"); window.location.replace('/admin/login') </script>`);
        }
  };
  



export default restaurantController;

