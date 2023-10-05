/**
 * Operadores Lógicos
 * && -> AND -> E
 * || -> OR -> OU
 * ! -> NOT -> NÂO
 */
const expressaoAnd = true && true && true && false;
const expressaoOr = false || false || false || true
console.log(expressaoAnd);
console.log(expressaoOr);

const usuario = 'Luiz'; // form usuário digitou
const senha = '12345'; // form usuário digitou

//                      True                False
const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(vaiLogar);

console.log(!true);
