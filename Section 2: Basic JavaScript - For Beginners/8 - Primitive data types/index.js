// Dados primitivos em JS: string, number, undefined, null, boolean, symbol

const nome = 'Luiz'; // string
const nome1 = "Luiz"; // string
const nome2 = `Luiz`; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta para nenhum local na memória
let sobrenomeAluno = null; // Nulo -> não aponta para nenhum local na memória, a gente utiliza quando em algum momento queremos explicitamente desconfigurar uma variável
const aprovado = false; // boolean = true, false (lógico)

console.log(typeof nome, nome);
console.log(typeof num1, num1);
console.log(typeof num2, num2);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof aprovado, aprovado);

/**
 * Para entender a diferença entre um tipo de dado primitivo e um tipo de dado passado por referência,
 * segue exemplo de um tipo de dado passado por referência:
 */

const a = [1, 2];
const b = a; // tipo de dado passado por referência: a e b apontam para o mesmo local em memória (por se tratar de array)

console.log(a, b);
b.push(3);
console.log(a, b);

let c = 2;
let d = c; // nesse caso o valor de c foi copiado para d, mas ambos sustentam seu próprio valor (por se tratar de dados primitivos)
console.log(c, d);
c = 3;
console.log(c, d);
