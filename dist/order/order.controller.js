"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
let OrderController = class OrderController {
    constructor() {
        this.orders = [
            {
                orderID: 1,
                userName: "Kristian Helland",
                itemName: "americano",
                completed: true,
                retrived: false,
            },
            {
                orderID: 2,
                userName: "Soni-chan",
                itemName: "Iced caramel latte",
                completed: true,
                retrived: false,
            },
            {
                orderID: 3,
                userName: "Stuart little",
                itemName: "Kakao u/krem",
                completed: false,
                retrived: false,
            },
            {
                orderID: 4,
                userName: "CAT",
                itemName: "et glass med melk ;P",
                completed: false,
                retrived: false,
            }
        ];
    }
    getAllOrders() {
        return this.orders;
    }
    getUncompletedOrders() {
        return this.orders.filter(o => o.completed === false);
    }
    getOrder(orderID) {
        return this.orders.find(o => o.orderID === orderID);
    }
    addOrder(body) {
        this.orders.push(body.name);
        return "shi works";
    }
    delOrder(index) {
        this.orders.splice(index, 1);
        return "Your order has been deleted please pay the cancelation fee";
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getAllOrders", null);
__decorate([
    (0, common_1.Get)("uncompleted"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getUncompletedOrders", null);
__decorate([
    (0, common_1.Get)(":orderID"),
    __param(0, (0, common_1.Param)("orderID")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getOrder", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "addOrder", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Query)("index")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "delOrder", null);
exports.OrderController = OrderController = __decorate([
    (0, common_1.Controller)('order')
], OrderController);
//# sourceMappingURL=order.controller.js.map