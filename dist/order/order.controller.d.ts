import { Order } from 'src/types/order';
export declare class OrderController {
    orders: Order[];
    getAllOrders(): Order[];
    getUncompletedOrders(): Order[];
    getOrder(orderID: number): Order;
    addOrder(body: any): string;
    delOrder(index: any): string;
}
