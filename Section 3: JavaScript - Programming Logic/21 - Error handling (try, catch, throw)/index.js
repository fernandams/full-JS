try {
    console.log(naoExisto);
} catch(error){
    console.log('naoExisto não existe.');
    console.log(error); // Erro exibido aqui para fins didáticos, poderia ser salvo em banco de dados ou utilizado de alguma forma
}

// Não é interessante expor erros internos para o usuário final (ao menos no frontend, no backend pode até ser...)
// Além do usuário provavelmente não entender, pode ser potencialmente perigoso

function soma(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        // throw('x e y precisam ser números.');
        // throw new ReferenceError('x e y precisam ser números.');
        throw new Error('x e y precisam ser números.'); // esses erros são lançados para o desenvolvedor entender qual tipo de erro que ocorreu
    }

    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error) {
    // console.log(error);
    console.log('Alguma coisa mais amigável para o usuário.');
}
