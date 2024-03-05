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
