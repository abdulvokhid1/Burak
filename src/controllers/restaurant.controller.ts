import { Request, Response } from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const restaurantController: T = {};

restaurantController.goHome = (req:Request, res:Response)=>{
    try{
        console.log("goHome")
        res.send("Home Page")
    } catch(err){
        console.log("ERROR, goHome", err)
    }
};

restaurantController.getLogin = (req:Request, res:Response)=>{
    try{
        res.send("Login Page")
    } catch(err){
        console.log("ERROR, getLogin", err)
    }
};

restaurantController.getSignup = (req:Request, res:Response)=>{
    try{
        res.send("Signup Page")
    } catch(err){
        console.log("ERROR, getSignup", err)
    }
    
};

restaurantController.processLogin = (req:Request, res:Response)=>{
    try{
        res.send("Done!")
    } catch(err){
        console.log("ERROR, processLogin", err)
    }
    
};

restaurantController.processSignup = async (req:Request, res:Response)=>{
    try{
        console.log("processSignup");
        console.log("body:", req.body);

        const newMember:MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;


        const memberService = new MemberService();
        const result = await memberService.processSignup(newMember)

        res.send(result)
    } catch(err){
        console.log("ERROR, processSignup", err);
        res.send(err)
    }
    
};

export default restaurantController;