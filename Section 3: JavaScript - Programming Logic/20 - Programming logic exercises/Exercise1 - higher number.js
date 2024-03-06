// Escreva uma função que recebe 2 números e retorne o maior deles
function max(x,y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

function max1(x,y) {
    if (x > y) {
        return x;
    }
    return y;
}

function max2(x,y) {
    if (x > y) return x;
    return y;
}

function max3(x, y) {
    return x > y ? x : y;
}

const max4 = (x,y) => {
    return x > y ? x : y;
}

const max5 = (x,y) => x > y ? x : y;

console.log(max5(10,100));