/**
 * Break pode poupar recursos do computador e melhorar a velocidade do seu código
 * Com o continue o laço de repetição será executado até o final pois quando executa o continue pula para a próxima interação
 * Com o break dentro de um laço de repetição ele irá executar somente até encontrar o break
 * Funciona com qualquer Estrutura de Repetição (for clássico, while, do while...)
 * É preciso lembrar de incrementar o contador antes de usar continue (para não entrar em loop infinito) ou break
 */
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2 || numero === 5) {
        console.log(`Pulei o número ${numero}`);
        continue; // quando chega no 2 ou 5 ele volta para o for indo para a próxima iteração
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break; // break sai do laço de repetição
    }
}

console.log('\nExecução com o Do While: ')

let i = 0;
do {
    let numero = numeros[i];

    if (numero === 2 || numero === 5) {
        console.log(`Pulei o número ${numero}`);
        i++;
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        i++;
        break;
    }

    i++;
    
} while (i < numeros.length);