"use strict";
// import { ChildEntity, Column } from "typeorm";
// import { Content } from '../entity/Content';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
// @ChildEntity()
// export class Cart extends Content {
//     @Column()
//     cart: string
// }
const typeorm_1 = require("typeorm");
const Content_1 = require("../entity/Content");
let Cart = class Cart extends Content_1.Content {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Cart.prototype, "cart_quantity", void 0);
Cart = __decorate([
    (0, typeorm_1.ChildEntity)()
], Cart);
exports.Cart = Cart;

