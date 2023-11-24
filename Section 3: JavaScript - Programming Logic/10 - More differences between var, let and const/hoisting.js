// a engine do JS praticamente trouxe "var sobrenome; para o topo"
console.log(sobrenome); // o JS faz a elevação da variável (hoisting)

var sobrenome = 'Miranda';

/**
 * Com let não ocorre o hoisting
 */

console.log(nome); // não consigo usar mesmo se houver declarado depois já que declarei com let

let nome = 'Maria';