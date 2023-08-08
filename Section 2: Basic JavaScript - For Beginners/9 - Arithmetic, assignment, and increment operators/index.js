/**
 * Aritméticos 
 * Adição / Concatenação: +
 * Subtração: - 
 * Divisão: /
 * Multiplicação: *
 * Potenciação: **
 * Resto da divisão: %
 * 
 * Precedência dos operadores:
 * 1º: ()
 * 2º: **
 * 3º: * / %
 * 4º: + -
 * 
 * Incremento: ++
 * Decremento: --
 * 
 * Operadores de atribuição: 
 * +=
 * -=
 * *=
 * /=
 * **=
 * 
 * NaN - Not a Number -> provavelmente sua conta tem algo errado
 * 
 * Conversões:
 * parseInt() -> converte uma string para inteiro
 * parseFloat() -> converte uma string para número com casas decimais
 * Number() -> não faz distinção e se vira para compreender se o número é inteiro ou decimal
 */

const num1 = 10;
const num2 = 3;
const num3 = 5;
const num4 = 2;
const passo = 50;
let contador = 0;
let atribuicao = 10;
const nome = 'Luiz'; 
const numString = '5';
let num5 = parseInt('5.2');

console.log(num1 * nome);
console.log(num1 * numString); // O JS tenta resolver para a gente e consegue fazer essa conta
console.log(typeof num5);
console.log(num1 + num5);
num5 = parseFloat('5.2');
console.log(num1 + num5);
num5 = Number('5.5');
console.log(num1 + num5);

contador += passo; // contador = contador + passo;
console.log(contador);
contador += passo; 
console.log(contador);
contador += passo; 
console.log(contador);

console.log('Incrementos:');
console.log(contador++); // incrementa 1 mas exibirá ainda o valor antigo
console.log(contador); // prova de que já foi incrementado
console.log(++contador); // incrementa 1 primeiro e exibe depois já o valor atualizado
console.log('Decrementos:');
console.log(contador--); // decrementa 1 mas exibirá ainda o valor antigo
console.log(contador); // prova de que já foi decrementado
console.log(--contador); // incrementa 1 primeiro e exibe depois já o valor atualizado
console.log('Resultados das operações aritméticas:');
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 ** num2);
console.log(num1 % num2);
console.log((num3 + num4) * num1);

console.log('Exemplos operadores de atribuição:')
atribuicao **= 2; // atribuicao = atribuicao ** 2
console.log(atribuicao);
atribuicao /= 2; // atribuicao = atribuicao / 2
console.log(atribuicao);
