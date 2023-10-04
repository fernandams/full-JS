/**
 * Tipos de dados primitivos (valores imutáveis):
 *  - string, number, boolean, undefined, null (bigint, symbol) - valores copiados
 * 
 * Tipos de dados passados por referência (mutável):
 *  - array, object, function - valores passados por referência (ao mesmo local de memória)
 */

let nome = 'Luiz';
nome[0] = 'R'; // essa linha não faz nada porque a string é imutável
console.log(nome[0], nome);

let a = 'A';
let b = a; // cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

let c = [1, 2, 3];
let d = c; // valor passado por referência (referência para o mesmo local da memória)
let e = d;
let f = [...c]; // copia o valor de 'c' para 'f' mas 'f' é independente "spread"
console.log(c, d);

c.push(4);
console.log(c, d);
d.pop();
console.log(c, d);

e.push('Luiz');
console.log(e);
console.log(c, d, e, f);

console.log(f);

const pessoaA = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

const pessoaB = pessoaA; // aponta para o mesmo local na memória
const pessoaC = {...pessoaA}; // copia o valor de forma independente "spread"

pessoaA.nome = 'João;'
console.log(pessoaB);
console.log(pessoaC);

