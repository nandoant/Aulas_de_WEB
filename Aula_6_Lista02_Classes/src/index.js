"use strict";
/*Exercicio 1 – Complete a classe Carro para que os atributos da mesma sejam acessados somente por métodos
(Getters/ Setters) e tenha um método para calcular a idade do carro com base no ano atual. Crie uma
instância de Carro*/
class Carro {
    constructor(modelo, cor, ano) {
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }
    get getModelo() {
        return this.modelo;
    }
    get getCor() {
        return this.cor;
    }
    get getAno() {
        return this.ano;
    }
    set setModelo(modelo) {
        this.modelo = modelo;
    }
    set setCor(cor) {
        this.cor = cor;
    }
    set setAno(ano) {
        this.ano = ano;
    }
    verificarAno() {
        const anoAtual = new Date;
        return anoAtual.getFullYear() - this.ano;
    }
}
console.log("---Testes do Objeto Carro---");
const lamboDoNando = new Carro('lamborghini', 'vermelho', 2023);
console.log(lamboDoNando.getAno); // lamborghini
console.log(lamboDoNando.getModelo); // vermelho
console.log(lamboDoNando.getCor); //2023
console.log(lamboDoNando.verificarAno()); // 1
lamboDoNando.setAno = 2020;
lamboDoNando.setModelo = 'fusca';
lamboDoNando.setCor = 'prata';
console.log(lamboDoNando); // Carro { modelo: 'fusca', cor: 'prata', ano: 2020 }
console.log("------");
console.log("\n");
/*Exercicio 2 : Desenvolva uma classe Calculadora em TypeScript

Crie uma classe Calculadora que encapsula funcionalidades matemáticas básicas. Esta classe deve
possuir os seguintes requisitos:
• Dois atributos numéricos (valor1 e valor2) para armazenar os operandos das operações.
• Um construtor que aceite dois números como parâmetros e os atribua aos respectivos
atributos.
• Métodos para realizar as seguintes operações matemáticas:
◦ Soma: retorna a adição dos dois valores.
◦ Subtração: retorna a diferença entre os dois valores.
◦ Multiplicação: retorna o resultado da multiplicação dos dois valores.
◦ Divisão: retorna o resultado da divisão do primeiro valor pelo segundo valor. Atenção:
evite divisões por zero.
◦ Porcentagem: retorna a porcentagem do primeiro valor em relação ao segundo valor.
◦ Getters e Setters
Certifique-se de que a classe lida corretamente com situações de erro, como a divisão por zero.
Teste todos os métodos.*/
class Calculadora {
    constructor(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    get getValor1() {
        return this.valor1;
    }
    get getValor2() {
        return this.valor2;
    }
    set setValor1(valor1) {
        valor1 = this.valor1;
    }
    set setValor2(valor2) {
        valor2 = this.valor2;
    }
    soma() {
        return this.valor1 + this.valor2;
    }
    subtração() {
        return this.valor1 - this.valor2;
    }
    multiplicação() {
        return this.valor1 * this.valor2;
    }
    divisão() {
        if (this.valor1 != 0 && this.valor2 != 0)
            return this.valor1 / this.valor2;
        return 'Erro! não podemos fazer divisão por 0';
    }
    porcentagem() {
        return (this.valor1 / this.valor2) * 100;
    }
}
console.log("---Teste da Calculadora---");
const testCal = new Calculadora(2, 6);
console.log(testCal.soma()); // 8
console.log(testCal.subtração()); // -4
console.log(testCal.multiplicação()); // 12
console.log(testCal.divisão()); // 0.333..
console.log(testCal.porcentagem()); // 33.33...
console.log("------");
console.log("\n");
/*Exercicio 3:Desenvolva uma classe Produto em TypeScript

Crie uma classe Produto que represente um item disponível em um catálogo de uma loja virtual. A
classe deve ter as seguintes características:
Atributos:
• nome: uma string que representa o nome do produto.
• preco: um número que representa o preço do produto.
• quantidadeEmEstoque: um número inteiro que indica a quantidade disponível em estoque do
produto.
Construtor:
• Deve aceitar três parâmetros: nome, preco e quantidadeEmEstoque, e atribuí-los aos
respectivos atributos da classe.
Métodos:
• calcularValorTotalEmEstoque(): retorna o valor total em estoque do produto, calculado
multiplicando o preço pelo quantidade em estoque.
• reporEstoque(quantidade: number): adiciona a quantidade especificada ao estoque do
produto.
• vender(quantidade: number): remove a quantidade especificada do estoque do produto. Se a
quantidade desejada for maior do que a disponível em estoque, deve ser lançado um erro
indicando que não há estoque suficiente.
• Getters e Setters
Certifique-se de que a classe lida corretamente com situações de erro, como tentar vender mais
produtos do que há em estoque. Teste todos os métodos. */
class produto {
}
console.log("---Teste do Produto---");
