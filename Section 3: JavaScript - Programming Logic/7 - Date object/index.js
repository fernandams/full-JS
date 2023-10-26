// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras - umDia);
let data = new Date(2019, 3, 20, 15, 14, 27, 500); // a, m, d, h, M, s, ms
console.log(data.toString());
data = new Date(2019, 2); // meses vão de 0 a 11
console.log(data.toString());

data = new Date('2022-09-25 18:20:59');
console.log(data.toString());

data = new Date('2022-09-25T18:20:59.100');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa do zero  
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());

console.log(Date.now());
data = new Date(1698335692810);
console.log(data.toDateString());


function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const hoje = new Date();
const dataBrasil = formataData(hoje);
console.log(dataBrasil);
