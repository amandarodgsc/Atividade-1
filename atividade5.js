const prompt = require('prompt-sync')();

const custoFabrica = parseFloat(prompt('Digite o custo de fábrica do carro: '));
const percentualDistribuidor = parseFloat(prompt('Digite a porcentagem do distribuidor: '));
const imposto = parseFloat(prompt('Digite o imposto: '));

const custoDistribuidor = custoFabrica * percentualDistribuidor / 100;
const custoFinal = custoFabrica + custoDistribuidor + imposto;

console.log(`Custo final do carro: R$ ${custoFinal.toFixed(2)}`);
