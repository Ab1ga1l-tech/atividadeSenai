const nome = "Abigail";
console.log(nome);

let idade = 20;
console.log(idade);

let logado = true;
console.log(logado);

//Parte 2 
let num1 = 15;
let num2 = 4;
let subtração = num1 - num2;
let multiplicação = num1 * num2;
let divisão = num1 / num2;
let módulo = num1 % num2;
console.log(subtração);
console.log(multiplicação);
console.log(divisão);
console.log(módulo);
console.log(num1 + num2);

//Parte 3
console.log("Olá, " + nome + "! Você tem " + idade + " anos.");
console.log("o número é " + num1 + " e o outro é " + num2 + ".");

//3 - Vamos criar uma estrutura para verificar se uma pessoa é maior de idade.
let idadeVisitante = 20;

    maiorIdade = true;
    ingresso = true;

if (idadeVisitante >= 18 & ingresso & maiorIdade) {
    console.log("Entrada permitida.");
} else {
    console.log("Entrada negada.");
}
let DiadaSemana = Number(prompt("Digite um número de 1 a 7:"));
switch(DiadaSemana){
    case 1:
        console.log("Segunda-feira");
        console.log("Dia da semana")
        break;
    case 2:
        console.log("Terça-feira");
        console.log("Dia da semana")
        break;  
    case 3:
        console.log("Quarta-feira");
        console.log("Dia da semana")
        break;
        case 4:
            console.log("Quinta-feira");
            console.log("Dia da semana")
            break;
        case 5:    
            console.log("Sexta-feira");
            console.log("Dia da semana")
            break;
        case 6:
            console.log("Sábado");
            console.log("Final de semana")

            break;
        case 7:
            console.log("Domingo");
            break;
        default:
            console.log("Dia inválido");
}
let nomeP = ["Abigail", "Ana", "Beatriz", "Bruna", "Camila"];
nome.push("Diana");
console.log(nomeP);

let quantidade = prompt("Quantos nomes deseja adicionar?");

let listaNomes=[];
for(let i=0; i<=quantidade; i++){
    let listaNome = prompt("Digite um nome:");
    listaNomes.push(listaNome);
    console.log(listaNomes);
}
const object = {
    nome: "Abigail",
    idade: 20,
    cidade: "São Paulo  "
};
console.log(object);


