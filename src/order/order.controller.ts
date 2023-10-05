import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { Order } from 'src/types/order';

@Controller('order')
export class OrderController {

    orders:Order[] = [
        {
            orderID: 1,
            userName: "Kristian Helland",
            itemName: "americano",
            completed: true,
            retrived:false,
        },
        {
            orderID: 2,
            userName: "Soni-chan",
            itemName: "Iced caramel latte",
            completed: true,
            retrived:false,
        },
        {
            orderID: 3,
            userName: "Stuart little",
            itemName: "Kakao u/krem",
            completed: false,
            retrived:false,
        },
        {
            orderID: 4,
            userName: "CAT",
            itemName: "et glass med melk ;P",
            completed: false,
            retrived:false,
        }
    ]

    @Get()
    getAllOrders(){
        return this.orders
    }
    
    @Get("uncompleted")
    getUncompletedOrders(){
        return this.orders.filter(o => o.completed === false)
    }

    @Get(":orderID")
    getOrder(@Param("orderID") orderID: number){
        return this.orders.find(o => o.orderID === orderID)

    }


    @Post()
    addOrder(@Body() body){
        this.orders.push(body.name) 
        return "shi works"
    }

    @Delete()
    delOrder(@Query("index") index){
        this.orders.splice(index,1)
        return "Your order has been deleted please pay the cancelation fee"
    }


}
