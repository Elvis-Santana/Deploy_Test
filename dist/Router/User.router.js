"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../controller/User"));
const router = express_1.default.Router();
router.post('/User/Create', User_1.default.CreateValidation, User_1.default.Create);
router.get('/', User_1.default.getAll);
exports.default = router;
