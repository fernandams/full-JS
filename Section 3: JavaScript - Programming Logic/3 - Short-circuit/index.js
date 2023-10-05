/**
 * Avaliação de curto-circuito
 * && -> false && true -> a partir do momento que eu encontrar o valor falso em um AND
 *  não preciso conferir os outro valores, retorna o valor que foi avaliado em falso 
 *  (se não encontrar valor falso, retorna o último avaliado como true)
 * || -> true || false -> precisa que qualquer um seja verdadeiro, vai retorna o primeiro valor verdadeiro
 * Valores avaliados em false (FALSY):
 * false (literal)
 * 0
 * '' "" ``
 * null / undefined
 * NaN
 * 
 * Qualquer coisa diferente disso avalia em true em JS
 */

console.log('Luiz Otávio' && true && NaN); // retorna "o valor mesmo"
console.log('Luiz' && '' && 'Maria');

function falaOi() {
    return 'Oi';
}

let vaiExecutar; // undefined (falsy)
vaiExecutar = 'Joãozinho'; // true

console.log(vaiExecutar && falaOi());

console.log(0 || false || null || 'Luiz Otávio' || true);

let corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false'; // avaliado como true em JS pois está entre ''
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // exibe o valor de c
