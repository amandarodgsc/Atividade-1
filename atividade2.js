const prompt = require('prompt-sync')();

const totalEleitores = parseInt(prompt('Digite o total de eleitores: '));
const votosBrancos = parseInt(prompt('Digite o número de votos brancos: '));
const votosNulos = parseInt(prompt('Digite o número de votos nulos: '));
const votosValidos = totalEleitores - votosBrancos - votosNulos;

const percentualBrancos = (votosBrancos / totalEleitores) * 100;
const percentualNulos = (votosNulos / totalEleitores) * 100;
const percentualValidos = (votosValidos / totalEleitores) * 100;

console.log(`Votos brancos: ${votosBrancos} (${percentualBrancos.toFixed(2)}%)`);
console.log(`Votos nulos: ${votosNulos} (${percentualNulos.toFixed(2)}%)`);
console.log(`Votos válidos: ${votosValidos} (${percentualValidos.toFixed(2)}%)`);
