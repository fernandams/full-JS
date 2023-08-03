// Não podemos criar constantes com palavras reservadas (ex.: let ou if)
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase (convenção por quem usa JS)
// Case-sensitive
// precisa ser inicializada no momento da declaração
// Não pode modificar o valor de uma constante 
// NÃO UTILIZE VAR, UTILIZE CONST.

// + - * /
//'Dentro de aspas' = String = Text
// foraDeAspas = Number = Número
const primeiroNumero = 5; // Number 
const segundoNumero = 10;
const terceiroNumero = '5'; // String
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
const resultadoTriplicado = resultado * 3;

console.log(typeof primeiroNumero); // verifica o tipo
console.log(typeof terceiroNumero);
console.log(resultado);
console.log(resultadoDuplicado)
console.log(resultadoTriplicado);
console.log(primeiroNumero + segundoNumero);
console.log(typeof(primeiroNumero + segundoNumero));
console.log(terceiroNumero + segundoNumero);
console.log(typeof(terceiroNumero + segundoNumero));