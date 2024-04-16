import {
    Order,
    OrderInquiry,
    OrderItemInput,
    OrderUpdateInput,
  } from "../libs/types/order";
  import { Member } from "../libs/types/member";
  import OrderModel from "../scheme/Order.model";
  import OrderItemModel from "../scheme/OrderItem.model";
  import { shapeIntoMongooseObjectId } from "../libs/config";
  import Errors, { HttpCode, Message } from "../libs/Errors";
  import { ObjectId } from "mongoose";
  import MemberService from "./Member.service";
  import { OrderStatus } from "../libs/enums/order.enum";

class OrderService {
    private readonly orderModel;
    private readonly orderItemModel;

    constructor() {
        this.orderModel = OrderModel;
        this.orderItemModel = OrderItemModel;
    }

    public async createOrder(
        member: Member,
        input: OrderItemInput[]
      ): Promise<Order> {
        const memberId = shapeIntoMongooseObjectId(member._id);
        const amount = input.reduce((accumulator: number, item: OrderItemInput) => {
          return accumulator + item.itemPrice * item.itemQuantity;
        }, 0);
        const delivery = amount < 100 ? 5 : 0;
    
        try {
          const newOrder: Order = await this.orderModel.create({
            orderTotal: amount + delivery,
            orderDelivery: delivery,
            memberId: memberId,
          });
    
          const orderId = newOrder._id;
          console.log("orderId:", newOrder._id);
    
          await this.recordOrderItem(orderId, input);
    
          return newOrder;
        } catch (err) {
          console.log("Error, model:createOrder:", err);
          throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }
      }
      private async recordOrderItem(
        orderId: ObjectId,
        input: OrderItemInput[]
      ): Promise<void> {
        const promisedList = input.map(async (item: OrderItemInput) => {
          item.orderId = orderId;
          item.productId = shapeIntoMongooseObjectId(item.productId);
          await this.orderItemModel.create(item);
          return "INSERTED";
        });
    
        const orderItemState = await Promise.all(promisedList);
        console.log("orderItemState:", orderItemState);
      }

      public async getMyOrders(
        member: Member,
        inquiry: OrderInquiry
      ): Promise<Order[]> {
        const memberId = shapeIntoMongooseObjectId(member._id);
        const matches = { memberId: memberId, orderStatus: inquiry.orderStatus };
    
        const result = await this.orderModel
          .aggregate([
            { $match: matches },
            { $sort: { updatedAt: -1 } },
            { $skip: (inquiry.page - 1) * inquiry.limit },
            { $limit: inquiry.limit },
            {
              $lookup: {
                from: "orderItems",
                localField: "_id",
                foreignField: "orderId",
                as: "orderItems",
              },
            },
            {
              $lookup: {
                from: "products",
                localField: "orderItems.productId",
                foreignField: "_id",
                as: "productData",
              },
            },
          ])
          .exec();
        if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    
        return result;
      }
    

    }

export default OrderService;