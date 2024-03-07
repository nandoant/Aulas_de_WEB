"use strict";
/*Ex1: Crie uma função que receba uma lista de números como parâmetro e retorne o
maior número da lista. */
function maiorNumero(lista) {
    return Math.max.apply(Math, lista);
}
// Testando a função
console.log("Testes Ex1");
console.log(maiorNumero([1, 2, 3, 4, 5])); // 5
console.log(maiorNumero([10, 20, 30, 40, 50])); // 50
console.log('\n');
/*Ex2:Desenvolva uma função que receba um número como parâmetro e verifique se
ele é par ou ímpar. Retorne true se for par e false se for ímpar.*/
function isPar(numero) {
    return numero % 2 === 0;
}
// Testando a função
console.log("Testes Ex2");
console.log(isPar(10)); // true
console.log(isPar(15)); // false
console.log('\n');
/*Ex3: Implemente uma função que calcule a média aritmética de um array de números
e retorne o resultado. Utilize essa função para calcular a média de diferentes
conjuntos de números.*/
function mediaAritmetica(lista) {
    let soma = 0;
    for (let numero of lista) {
        soma += numero;
    }
    return soma / lista.length;
}
// Testando a função
console.log("Testes Ex3");
console.log(mediaAritmetica([1, 2, 3, 4, 5])); // 3
console.log(mediaAritmetica([10, 20, 30, 40, 50])); // 30
console.log('\n');
/*Ex4: Crie uma função que receba uma string como parâmetro e retorne a mesma
string com todas as letras em caixa alta. Utilize essa função para converter
diferentes strings.*/
function caixaAlta(palavra) {
    return palavra.toUpperCase();
}
// Testando a função
console.log("Testes Ex4");
console.log(caixaAlta("teste")); // "TESTE"
console.log(caixaAlta("TesTe")); // "TESTE"
console.log('\n');
/*Ex5: Desenvolva uma função que determine se um número é primo ou não. Retorne
true se for primo e false se não for*/
function isPrimo(numero) {
    if (numero < 2)
        return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0)
            return false;
    }
    return true;
}
// Testando a função
console.log("Testes Ex5");
console.log(isPrimo(7)); // true
console.log(isPrimo(10)); // false
console.log('\n');
/*Ex6: Implemente uma função que inverta a ordem dos elementos em um array.
Utilize essa função para inverter a ordem de diferentes conjuntos de elementos.*/
function inverterArray(lista) {
    return lista.reverse();
}
// Testando a função
console.log("Testes Ex6");
console.log(inverterArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(inverterArray([10, 20, 30, 40, 50])); // [50, 40, 30, 20, 10]
console.log('\n');
/*Ex7: Crie uma função que receba um valor e uma porcentagem como parâmetros. A
função deve retornar o valor acrescido da porcentagem indicada.*/
function acrescimoPorcentagem(valor, porcentagem) {
    return valor + (valor * porcentagem / 100);
}
// Testando a função
console.log("Testes Ex7");
console.log(acrescimoPorcentagem(100, 10)); // 110
console.log(acrescimoPorcentagem(200, 20)); // 240
console.log('\n');
/*Ex8: Crie uma função que receba uma string e retorne a mesma string, mas com as
palavras em ordem reversa.*/
function inverterPalavras(frase) {
    return frase.split(' ').reverse().join(' ');
}
// Testando a função
console.log("Testes Ex8");
console.log(inverterPalavras("Teste de função")); // "função de Teste"
console.log(inverterPalavras("Aula de TypeScript")); // "TypeScript de Aula"
console.log('\n');
/*Ex9: Implemente uma função que retorne a soma de todos os números pares em um
array*/
function somaPares(lista) {
    let soma = 0;
    for (let numero of lista) {
        if (numero % 2 === 0)
            soma += numero;
    }
    return soma;
}
// Testando a função
console.log("Testes Ex9");
console.log(somaPares([1, 2, 3, 4, 5])); // 6
console.log(somaPares([10, 20, 30, 40, 50])); // 150
console.log('\n');
/*Ex10: Crie uma função que calcule o fatorial de um número. Utilize essa função para
calcular o fatorial de diferentes números.*/
function fatorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}
// Testando a função
console.log("Testes Ex10");
console.log(fatorial(5)); // 120
console.log(fatorial(10)); // 3628800
console.log('\n');
