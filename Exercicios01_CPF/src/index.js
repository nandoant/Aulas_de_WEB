"use strict";
/*Exercício 01 - Escreva uma função em TypeScript que aceite um array de números como
parâmetro e retorne o array ordenado em ordem crescente.*/
function ordenarCrescente(lista) {
    return lista.sort(function (a, b) { return a - b; });
}
// Testando a função
console.log("Testes Ex1");
console.log(ordenarCrescente([5, 2, 3, 4, 1])); // [1, 2, 3, 4, 5]
console.log(ordenarCrescente([10, 20, 30, 40, 50])); // [10, 20, 30, 40, 50]
console.log('\n');
/*Exercício 02 - Escreva uma função em TypeScript que calcule a média ponderada de um
conjunto de valores, dados seus valores e pesos correspondentes.*/
function mediaPonderada(valores, pesos) {
    let soma = 0;
    let somaPesos = 0;
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i] * pesos[i];
        somaPesos += pesos[i];
    }
    return soma / somaPesos;
}
// Testando a função
console.log("Testes Ex2");
console.log(mediaPonderada([1, 2, 3, 4, 5], [1, 1, 1, 1, 1])); // 3
console.log(mediaPonderada([10, 20, 30, 40, 50], [1, 2, 3, 4, 5])); // 36.666...
console.log('\n');
/*Exercício 03 - Crie uma função em TypeScript que valide se um CPF é válido ou não. O CPF é
composto por 11 dígitos numéricos. Considere a entrada como numérica. Para ser válido, ele deve
seguir algumas regras específicas de formação e ter dígitos verificadores corretos.*/
function validaçãoCPF(CPF) {
    let ArrayCPF = numberToArray(CPF);
    return validaçãoPrimeiroDigito(CPF, ArrayCPF) && validaçãoSegundoDigito(CPF, ArrayCPF);
}
function validaçãoSegundoDigito(CPF, arrayCPF) {
    let soma = 0;
    let j = 11;
    for (let i = 0; i < 10; i++) {
        soma += arrayCPF[i] * j;
        j--;
    }
    return (soma * 10) % 11 == arrayCPF[10];
}
function validaçãoPrimeiroDigito(CPF, arrayCPF) {
    let soma = 0;
    let j = 10;
    for (let i = 0; i < 9; i++) {
        soma += arrayCPF[i] * j;
        j--;
    }
    if ((soma * 10) % 11 == 10)
        soma = 0;
    return (soma * 10) % 11 == arrayCPF[9];
}
function numberToArray(num) {
    return num.toString().split('').map(Number);
}
// Testando a função
console.log("Testes Ex2");
console.log(validaçãoCPF(52998224725)); //true
console.log(validaçãoCPF(52998224726)); //false
