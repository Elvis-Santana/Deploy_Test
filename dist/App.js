"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const User_router_1 = __importDefault(require("./Router/User.router"));
require("dotenv/config");
class App {
    constructor() {
        this.PORT = Number(process.env.PORT) || 8080;
        this.app = (0, express_1.default)();
        this.AppStart();
        this.app.use(express_1.default.json());
        this.app.use(User_router_1.default);
    }
    getApp() {
        return this.app;
    }
    AppStart() {
        this.app.listen(this.PORT, () => console.log(`http://localhost:${this.PORT}`));
    }
}
exports.App = App;
