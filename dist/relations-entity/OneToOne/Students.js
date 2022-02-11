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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const typeorm_1 = require("typeorm");
const College_1 = require("./College");
let Student = class Student {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int" }),
    __metadata("design:type", String)
], Student.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, unique: true, nullable: false }),
    __metadata("design:type", String)
], Student.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: false }),
    __metadata("design:type", Number)
], Student.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => College_1.College, college => college.student),
    (0, typeorm_1.JoinColumn)({ name: "CollegeID" }),
    __metadata("design:type", College_1.College)
], Student.prototype, "college", void 0);
Student = __decorate([
    (0, typeorm_1.Entity)()
], Student);
exports.Student = Student;
