/**
 * duas maneiras de criar variáveis: let e var
 * var é um pouco mais antigo
 */ 

// Não podemos criar variáveis com palavras reservadas (ex.: let ou if)
// Variáveis precisam ter nomes significativos
// Não pode começar o nome de uma variável com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase (convenção por quem usa JS)
// Case-sensitive
// Não podemos redeclarar variáveis com let
// NÃO UTILIZE VAR, UTILIZE LET.

let nomeCliente = 'João';
let n0me = 'isso até pode';
let nome = 'Luiz';
let Nome = 'Otávio';

let test; // variável declarada
console.log(test); 
test = 'Qualquer valor'; // variável inicializada
console.log(test);
console.log(nome, Nome);
