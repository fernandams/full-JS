/**
 * Let tem escopo de bloco { ... bloco}
 * Var só tem escopo de função
 * 
 * O único escopo que var vai respeitar é o de dentro da função
 * Mesmo dentro da função, var não vai respeitar o escopo de outros blocos
 */
const verdadeira = true;

function funcao() {

    if(verdadeira) {
        let nome = 'Luiz'; // só acessa dentro desse blooo
        var sobrenome = 'Miranda'; // acesso em qualquer lugar desde que ainda dentro dessa função

        console.log(nome); // funciona pois está dentro do bloco em que foi declarado
    }

    // console.log(nome); // Error: nome is not defined
    console.log(sobrenome);
}

funcao();
console.log(sobrenome); // Error: sobrenome is not defined

