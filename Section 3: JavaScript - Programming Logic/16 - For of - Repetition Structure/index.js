/**
 * For clássico - Funciona com iteráveis (arrays ou strings)
 * For in - Retorna o índice ou chave (string, array ou objetos)
 * For of - Retorna o valor em si (iteráveis, arrays ou strings)
 */

const nomes = ['Luiz', 'Otávio', 'Henrique'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('####');

for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('####');

for (let valor of nomes) {
    console.log(valor);
}

// nomes.forEach(function (valor, indice, array) {
//     console.log(valor, indice, array);
// });
// (Veremos mais sobre isso depois)
