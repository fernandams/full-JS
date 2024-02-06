/**
 * "While geralmente é mais utilizado quando você não sabe exatamente quando a sua repetição irá terminar"
 * Do while executa o código ao menos uma vez pois ele só faz a verificação no final (executa o código e depois verifica a condição)
 * No while se a condição for falsa ele nem entra
 */

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;

console.log('While');

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

console.log('Do While');

do {
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);