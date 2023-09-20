"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Create = exports.CreateValidation = void 0;
const http_status_codes_1 = require("http-status-codes");
const ValidationUser_1 = require("../../middleware/ValidationUser");
const model = [];
const CreateValidation = async (req, res, next) => {
    try {
        const { nome, email, senha } = await req.body;
        const ErrorsCreate = await (0, ValidationUser_1.validationCreate)(nome, email, senha);
        return ErrorsCreate.length == 0 ? next() : res.json(ErrorsCreate);
    }
    catch (errr) {
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ Erro: "Erro no servidor" });
    }
};
exports.CreateValidation = CreateValidation;
const Create = async (req, res, next) => {
    const info = req.body;
    await model.push(info);
    return res.json(model);
};
exports.Create = Create;
