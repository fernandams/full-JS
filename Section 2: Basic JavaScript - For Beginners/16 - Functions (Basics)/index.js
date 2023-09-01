function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Luiz');
console.log(variavel);

function soma(x = 1, y = 1) {
    const resultado = x + y; // variavel protegida no escopo da função
    return resultado;
}

const resultado = soma(2, 2); // possível criar essa variável resultado independente da outra
console.log(resultado);

console.log(soma('Luiz', ' Otávio'));

console.log(soma());
console.log(soma(4));

/**
 * Função anônima
 */
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

/**
 * Arrow function
 */
const raizQuadrada = n => n ** 0.5;

console.log(raizQuadrada(9));
console.log(raizQuadrada(16));
console.log(raizQuadrada(25));
