"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationCreate = void 0;
const MIN_NAME_CHARACTERS = 3;
const MIN_password_CHARACTERS = 4;
function message(message, condicao) {
    return condicao ? message : null;
}
const validationCreate = (nome, email, senha) => {
    const ErrosCreateUser = [];
    ErrosCreateUser.push(message(`Nome não pode ser null ou ter menos de ${MIN_NAME_CHARACTERS} CARACTERES`, nome.length < MIN_NAME_CHARACTERS || nome == ""), message(`Nome não pode escrito com numeros `, (typeof nome == 'number')), message(`email não pode ser null `, email == ""), message(`senha não pode ser null ou ter menos de ${MIN_password_CHARACTERS} CARACTERES`, senha.length < MIN_password_CHARACTERS || senha == ""));
    return ErrosCreateUser.filter(e => e !== null);
};
exports.validationCreate = validationCreate;
