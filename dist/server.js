"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const validarCPF_1 = require("./validarCPF");
const app = (0, express_1.default)();
// Middlewares
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
// Rota inicial
app.get("/", (req, res) => {
    res.send("API de validação de CPF funcionando!");
});
// Rota para validar CPF
app.get("/cpf/:numero", (req, res) => {
    const cpf = req.params.numero;
    const valido = (0, validarCPF_1.validarCPF)(cpf);
    res.json({
        cpf,
        valido,
        mensagem: valido ? "CPF válido" : "CPF inválido"
    });
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
