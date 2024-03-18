const prompt = require('prompt-sync')();

const num1 = parseFloat(prompt('Digite o primeiro número: '));
const num2 = parseFloat(prompt('Digite o segundo número: '));

const soma = num1 + num2;
const multiplicacao = soma * num1;

console.log(`Soma: ${soma}`);
console.log(`Multiplicação: ${multiplicacao}`);
