// a princípio são duas maneiras de declarar variável
let nome = 'Luiz';
var nome2 = 'Luiz'; // declarando
/**
 * A primeira diferença que vimos é que var permite redeclarar (enquanto let não permite) 
 */
var nome2 = 'José'; // redeclarada

const verdadeira = true;

/**
 * Let tem escopo de bloco { ... bloco}
 * Var só tem escopo de função
 */

if(verdadeira) {
    let nome = 'Otávio'; // aqui estamos criando outra variável nome (não é redeclaração)
    var nome2 = 'Otávio'; // redeclarada novamente
    console.log(nome, nome2);

    if(verdadeira) {
        let nome = 'Outra coisa'; // outra variável nova em outro bloco
        console.log(nome);
    }
}

/**
 * Escopo de função: muito especial pois protegem as variáveis que estão dentro dela
 */
var sobrenome = 'Miranda';

function falaOi() {
    var nome3 = 'Fernanda'; // variável criada com var dentro da função só é acessada pela função
    console.log(nome3);
    console.log(sobrenome); // entretanto a variavel com var de fora também existe dentro
}

// console.log(nome3);

falaOi();
