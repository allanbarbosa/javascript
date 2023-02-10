function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(4,5);
imprimirSoma('Teste de carro', 2);
imprimirSoma(2);
imprimirSoma();

const imprimirSomaV2 = function (a,b) {
    console.log(a+b);
}

imprimirSomaV2(2,3);

const soma = (a,b) => {
    return a + b;
}

console.log(soma(2,3));

const subtracao = (a,b) => a-b;
console.log(subtracao(2,3));