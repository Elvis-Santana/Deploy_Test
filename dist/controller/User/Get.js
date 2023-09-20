"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
const http_status_codes_1 = require("http-status-codes");
const getAll = async (req, res, next) => {
    return await res.status(http_status_codes_1.StatusCodes.OK).json({ hello: "WOLRD" });
};
exports.getAll = getAll;
