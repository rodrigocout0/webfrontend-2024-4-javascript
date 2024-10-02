// Importando a biblioteca readline-sync
const readline = require('readline-sync');

/* Criar loop para permitir continuar
permitindo ao atendente digitar dados */
let novaMesa = true;

while (novaMesa){
//capturando o número da mesa
const numeroMesa = readline.questionInt("digite o número da mesa: ");

 // Validando o número da mesa
 if (numeroMesa <= 0) {
    console.log("O número da mesa deve ser um valor positivo.");
    continue; // Pula para a próxima iteração
}

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt("Digite o número de pessoas na mesa: ");

 // Validando o número de pessoas
 if (numeroPessoas <= 0) {
    console.log("O número de pessoas deve ser um valor positivo.");
    continue; // Pula para a próxima iteração
}

// Capturando o valor total da conta
const valorTotal = readline.questionFloat("Digite o valor total da conta: ");

// Validando o valor total
if (valorTotal < 0) {
    console.log("O valor total da conta não pode ser negativo.");
    continue; // Pula para a próxima iteração
}

// Capturando o método de pagamento
 console.log("Escolha o método de pagamento:");
 console.log("1 - Cartão");
 console.log("2 - Pix");
 console.log("3 - Dinheiro");
 const metodoPagamentoEscolha = readline.questionInt("Digite a opção desejada: ");

 let metodoPagamento = '';

// Atribuindo o método de pagamento com base na escolha usando if
if (metodoPagamentoEscolha === 1) {
 metodoPagamento = "cartão";
} 
if (metodoPagamentoEscolha === 2) {
 metodoPagamento = "pix";
} 
if (metodoPagamentoEscolha === 3) {
 metodoPagamento = "dinheiro";
} 

// Verificando se o método de pagamento foi atribuído
if (!metodoPagamento) {
 console.log("Opção inválida! Por favor, escolha 1, 2 ou 3.");
 continue; // Pula para a próxima iteração
}

/* criando variavel para armazenar desconto */
let valorConta = valorTotal;


//Façã sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO
if (metodoPagamento.toLocaleLowerCase() === "pix" || metodoPagamento.toLowerCase() === "dinheiro"){
    const desconto = 0.1; /* valor do desconto */
    valorConta = valorTotal - (valorTotal * desconto);
    console.log(`Você ganhou 10% de desconto. Valor Final: R$ ${valorConta.toFixed(2)}`);
} else{
    console.log(`Pagamento em cartão. Sem desconto aplicado. Valor Final: R$ ${valorConta.toFixed(2)}`);
}

//Calcular Valor por pessoa
const valorPessoa = valorConta / numeroPessoas;

// Exibindo os resultados
console.log(`\nNúmero da mesa: ${numeroMesa}`);
console.log(`Número de pessoas: ${numeroPessoas}`);
console.log(`Método de pagamento: ${metodoPagamento}`);
console.log(`Valor final da conta: ${valorConta.toFixed(2)}`);
console.log(`Valor por pessoa: ${valorPessoa.toFixed(2)}\n`);

/* Perguntar se o usuario deseja permanecer
ou sair do aplicativo*/
const permanecer = readline.question ("Calcular outra conta? (sim/não): ").toLowerCase();
if (permanecer !== "sim"){
    novaMesa = false;
}
}
