import { validarCPF } from "./validarCPF";

const cpf = process.argv[2]; // CPF passado no terminal

if (!cpf) {
  console.log("Nenhum CPF informado!");
  console.log("Use: npm run cpf 12345678909");
  process.exit(1);
}

const valido = validarCPF(cpf);

console.log("====================================");
console.log(`CPF informado: ${cpf}`);
console.log(`Resultado: ${valido ? "✔ CPF VÁLIDO" : "❌ CPF INVÁLIDO"}`);
console.log("====================================");
