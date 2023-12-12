const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

console.log(pessoa);

// const nome = pessoa.nome;

// Atribuição via desestruturação
const { nome: teste = '', sobrenome, idade } = pessoa; // extrai essas chaves desse objeto e já cria variáveis

console.log(teste, sobrenome);

const { endereco: { rua: r = 12345, numero }, endereco } = pessoa;
console.log(r, numero, endereco);

const { nome, ...resto } = pessoa;
console.log(nome, resto);
