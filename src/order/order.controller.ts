import { Body, Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('order')
export class OrderController {

    orders = ["kakao", "cappuccino", "americano", "Tobias forlate området plz"]

    @Get()
    getAllOrders(){
        return this.orders
    }

    @Post()
    addOrder(@Body() body){
        this.orders.push(body.name) 
        return "shi works"
    }

    @Delete()
    delOrder(){
        return "Your order has been deleted please pay the cancelation fee"
    }


}
