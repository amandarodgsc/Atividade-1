const prompt = require('prompt-sync')();

const carrosVendidos = parseInt(prompt('Digite o número de carros vendidos: '));
const valorTotalVendas = parseFloat(prompt('Digite o valor total das vendas: '));
const salarioFixo = parseFloat(prompt('Digite o salário fixo do vendedor: '));
const comissaoCarro = parseFloat(prompt('Digite o valor da comissão por carro vendido: '));

const comissaoVendas = valorTotalVendas * 0.05;

const salarioFinal = salarioFixo + (carrosVendidos * comissaoCarro) + comissaoVendas;

console.log(`Salário final do vendedor: R$ ${salarioFinal.toFixed(2)}`);
