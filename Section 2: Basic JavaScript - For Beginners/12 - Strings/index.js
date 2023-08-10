// uma string é indexada no JS, cada caractere tem um índice e 0 representa o primeiro
let umaString = "Um \"texto\" \\";
let frase = "O rato roeu a roupa do rei de roma.";

console.log(umaString);

//           01234567
umaString = "Um texto";
console.log(umaString);
console.log(umaString[5]);
console.log(umaString.charAt(5));

console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('Um'));
console.log(umaString.indexOf("Texto"));
console.log(umaString.indexOf('t', 4));
console.log(umaString.lastIndexOf('t', 4));

console.log(umaString.match(/[a-z]/g)); // referente a expressões regulares
console.log(umaString.search(/x/)); // similar ao indexOf mas aceita expressões regulares

console.log(umaString.replace('Um', 'Outro'));
console.log(umaString.replace(/Um/, 'Mais um'));

console.log(frase);
console.log(frase.replace(/r/, '#'));
console.log(frase.replace(/r/g, '#'));

console.log(umaString.length);
console.log(frase.length);

console.log(frase.slice(2, 6));
console.log(frase.length - 5);
console.log(frase.slice(30));
console.log(frase.slice(-5, -1));

console.log(frase.substring(frase.length - 5, frase.length - 1));
console.log(frase.substring(23, 26));

console.log(frase.split(' '));
console.log(frase.split('r'));
console.log(frase.split(' ', 3));

console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
