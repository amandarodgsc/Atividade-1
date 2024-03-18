const prompt = require('prompt-sync')();

const salarioAtual = parseFloat(prompt('Digite o salário atual: '));
const reajuste = parseFloat(prompt('Digite o percentual de reajuste: '));

const novoSalario = salarioAtual + (salarioAtual * reajuste / 100);

console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);
