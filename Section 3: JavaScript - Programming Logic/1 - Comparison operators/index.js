/**
 * Operadores de comparação
 * > maior que
 * >= maior que ou igual a
 * < menor que
 * <= menor que ou igual a
 * == igualdade (só checa valor, uso não recomendado) 
 * === igualdade estrita (checa valor e tipo)
 * != diferente (só checa valor, uso não recomendado) 
 * !== diferente estrito (checa valor e tipo)
 */
const num1 = 10; // number
const num2 = '10'; // string
const comp = num1 == num2; // true
const comp2 = num1 === num2; // false
console.log(comp);
console.log(comp2);
console.log(num1 != num2);
console.log(num1 !== num2);