const prompt = require('prompt-sync')();

// Ler o raio e a altura
const raio = parseFloat(prompt('Digite o raio da caixa dágua: '));
const altura = parseFloat(prompt('Digite a altura da caixa dágua: '));

// Calcular o volume
const volume = Math.PI * raio * raio * altura;

// Calcular a área da base
const areaBase = Math.PI * raio * raio;

// Calcular o perímetro da base
const perimetroBase = 2 * Math.PI * raio;

// Calcular a área lateral
const areaLateral = perimetroBase * altura;

// Calcular a área total
const areaTotal = 2 * areaBase + areaLateral;

// Exibir o volume e a área total
console.log(`Volume da caixa d'água: ${volume.toFixed(2)} litros`);
console.log(`Área total da caixa d'água: ${areaTotal.toFixed(2)} metros quadrados`);
