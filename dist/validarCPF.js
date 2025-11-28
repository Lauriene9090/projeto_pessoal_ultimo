"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCPF = validarCPF;
function validarCPF(cpf) {
    if (!cpf)
        return false;
    cpf = cpf.replace(/\D/g, "");
    if (cpf.length !== 11)
        return false;
    if (/^(\d)\1+$/.test(cpf))
        return false;
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += Number(cpf[i]) * (10 - i);
    }
    let digito1 = 11 - (soma % 11);
    digito1 = digito1 >= 10 ? 0 : digito1;
    if (digito1 !== Number(cpf[9]))
        return false;
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += Number(cpf[i]) * (11 - i);
    }
    let digito2 = 11 - (soma % 11);
    digito2 = digito2 >= 10 ? 0 : digito2;
    return digito2 === Number(cpf[10]);
}
