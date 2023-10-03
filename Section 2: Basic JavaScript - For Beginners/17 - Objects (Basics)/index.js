const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() { // método (não precisa da palavra function)
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        ++this.idade;
    }
};

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();

// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Luiz', 'Miranda', '25');
const pessoa2 = criaPessoa('Maria', 'Oliveira, 32');
const pessoa3 = criaPessoa('João', 'Moreira, 55');
const pessoa4 = criaPessoa('Junior', 'Lara, 44');
const pessoa5 = criaPessoa('Jean', 'Otávio, 69');

console.log(pessoa1.nome, pessoa2.nome);
