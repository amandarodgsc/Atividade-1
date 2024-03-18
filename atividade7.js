const prompt = require('prompt-sync')();

const nota1 = parseFloat(prompt('Digite a primeira nota: '));
const nota2 = parseFloat(prompt('Digite a segunda nota: '));

const media = (nota1 * 4 + nota2 * 6) / 10;

console.log(`Média: ${media.toFixed(2)}`);
