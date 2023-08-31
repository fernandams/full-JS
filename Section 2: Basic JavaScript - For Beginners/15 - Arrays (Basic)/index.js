let alunos = ['Luiz', 'Maria', 'João', 1, true, null]; // array com diferentes tipos juntos funciona no JS mas não é uma boa prátiica
console.log(alunos);

//         0        1        2
alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);

alunos[0] = 'Eduardo';
alunos[3] = 'Luiza';
alunos[alunos.length] = 'Fábio'; 
alunos[alunos.length] = 'Luana'; // Adiciona no fim
alunos.push('Otávio');  // Adiciona no fim

alunos.unshift('Beatriz'); // Adiciona no começo 
alunos.unshift('Rebecca'); // Adiciona no começo 

console.log(alunos);

const removido = alunos.pop(); // remove do final
console.log(removido);
console.log(alunos);

const removidoComeco = alunos.shift(); // remove do inicio
console.log(removidoComeco);
console.log(alunos);

delete alunos[1];
console.log(alunos[1]);
console.log(alunos);

console.log(alunos.slice(0, 3));
console.log(alunos.slice(0, -2));

/**
 * Em JS Array é um objeto
 */
console.log(typeof alunos);
console.log(alunos instanceof Array);
