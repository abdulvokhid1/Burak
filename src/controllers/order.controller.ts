import { ExtendedRequest } from "../libs/types/member";
import { T } from "../libs/types/common";
import { Response } from "express";
import Errors, { HttpCode, Message } from "../libs/Errors";
import OrderService from "../models/Order.service";
import { OrderStatus } from "../libs/enums/order.enum";

const orderService = new OrderService();

const orderController: T = {};

orderController.createOrder = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log("createOrder");
    const result = await orderService.createOrder(req.member, req.body);

    res.status(HttpCode.CREATE).json(result);
  } catch (err) {
    console.log("Error, createOrder:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default orderController;