// Indices fora       0           1          2
// Indices dentro  0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [2, 5, 6], [7, 8, 9] ];

console.log(numeros[1][2]);

const [,[,,seis]] = numeros;
console.log(seis);

const [lista1, lista2, lista3] = numeros;
console.log(lista2);
console.log(lista2[2]);
