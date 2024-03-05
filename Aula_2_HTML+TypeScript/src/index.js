/*

Exercício:
Considere um sistema de cadastro de usuários onde precisamos armazenar informações sobre os usuários.
Vamos criar variáveis e objetos para representar diferentes tipos de dados relacionados a um usuário.

1- Crie as seguintes variáveis primitivas:
    nomeCompleto: do tipo string, representando o nome completo de um usuário.
    idade: do tipo number, representando a idade do usuário.
    email: do tipo string, representando o endereço de e-mail do usuário.
    isAtivo: do tipo boolean, representando se o usuário está ativo ou não.
*/
var nomeCompleto;
var idade;
var email;
var isAtivo;
/*
2 -Crie um objeto usuario com as seguintes propriedades:

    nome: string, representando o primeiro nome do usuário.
    sobrenome: string, representando o sobrenome do usuário.
    idade: number, representando a idade do usuário.
    contato: objeto com as seguintes propriedades:
    email: string, representando o endereço de e-mail do usuário.
    telefone: string, representando o número de telefone do usuário (opcional).
    Em seguida, imprima todas as variáveis e propriedades do objeto usuario usando console.log.

*/
var Usuario;
// Criando um objeto usuario
Usuario = {
    nome: 'PrimeiroNome',
    sobrenome: 'Sobrenome',
    idade: 30,
    contato: {
        email: 'usuario@exemplo.com.br',
        telefone: '123-456-7890'
    }
};
Usuario.nome = "teste";
console.log(Usuario);
/*

Exercício:
Vamos criar um sistema de gestão de produtos para uma loja online.
Precisamos armazenar informações sobre diferentes produtos disponíveis na loja. Vamos criar variáveis e objetos para representar esses produtos.

01 - Crie as seguintes variáveis primitivas:

    nomeProduto: do tipo string, representando o nome de um produto.
    preco: do tipo number, representando o preço do produto.
    disponivel: do tipo boolean, representando se o produto está disponível em estoque ou não.
*/
var nomeProduto;
var preco;
var disponivel;
var produto = {
    nome: 'Chocolate',
    preco: 15,
    estoque: 125,
    categorias: ['doce', 'alimento', 'sobremesa']
};
console.log(produto);
