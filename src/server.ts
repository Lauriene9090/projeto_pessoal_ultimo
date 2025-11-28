import express from "express";
import helmet from "helmet";
import { validarCPF } from "./validarCPF";

const app = express();

// Middlewares
app.use(helmet());
app.use(express.json());

// Rota inicial
app.get("/", (req, res) => {
  res.send("API de validação de CPF funcionando!");
});

// Rota para validar CPF
app.get("/cpf/:numero", (req, res) => {
  const cpf = req.params.numero;

  const valido = validarCPF(cpf);

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
