const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, dois, tres, ...resto] = numeros; // ... rest, ... spread (aqui usamos esse operador como rest operator)
console.log(um, dois, tres);
console.log(numeros);
console.log(resto);

const [primeiro, , terceiro, , quinto, , setimo] = numeros;
console.log(primeiro, terceiro, quinto, setimo);
