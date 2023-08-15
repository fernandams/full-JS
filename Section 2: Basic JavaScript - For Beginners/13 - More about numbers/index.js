/** 
 * Padrão que o JS utiliza para a precisão:  IEEE 754-2008
 */

let num1 = 1; // number
let num2 = 2.5; // number

console.log(num1.toString() + num2);
console.log(typeof num1);

num1 = num1.toString();
console.log(typeof num1);

num1 = 1500;
console.log(typeof num1);
console.log(num1);
console.log(num1.toString(2)); // versão binária

num2 = 10.5789551255547;
console.log(num2.toFixed(2)); // arredonda com duas casas decimais para mostrar mas sem alterar o valor real
console.log(num2.toFixed(4)); // arredonda com 4 casas decimais para mostrar mas sem alterar o valor real
console.log(num2);

console.log(Number.isInteger(num1));
console.log(Number.isInteger(num2));

let temp = num1 * 'Olá';
console.log(temp);
console.log(Number.isNaN(temp));

num1 = 0.7;
num2 = 0.1;

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0

num1 = parseFloat(num1.toFixed(2));
// num1 = Number(num1.toFixed(2));

// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

console.log(num1);
console.log(Number.isInteger(num1));
