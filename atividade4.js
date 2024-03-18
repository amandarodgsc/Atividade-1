const prompt = require('prompt-sync')();

const custoFabrica = parseFloat(prompt('Digite o custo de fábrica do carro: '));

const custoDistribuidor = custoFabrica * 0.28;
const impostos = custoFabrica * 0.45;
const custoFinal = custoFabrica + custoDistribuidor + impostos;

console.log(`Custo final do carro: R$ ${custoFinal.toFixed(2)}`);
