/** 
 * Luiz Otávio Miranda tem 34 anos, pesa 84 kg
 * tem 1.8 de altura e seu IMC é de 25.925925925925924
 * Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 34;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal; // peso / (altura * altura) 
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg'); // imprime vários elementos diferentes com espaços entre eles
console.log('tem ' + alturaEmM + ' de altura e seu IMC é de ' + indiceMassaCorporal); // concatenado em uma string só
console.log(`${nome} nasceu em ${anoNascimento}.`); // template strings -> maneira mais moderna e legível