const readline = require("readline-sync");

// Trabalho 1 do módulo 2 - Softex
const Cad_Pessoas = [
    {
        Nome: "Deivyson",
        Salario: 1900,
        idade: 22,
        diploma: true
    }
]

let Teste1 = true
do {
    Teste1 = true
    try {
        var nomeP = readline.question("\nInforme seu nome: ")
        if (nomeP.length<1){
            throw new Error("Nome não informado. Informe um nome")
        } else if(typeof nomeP!= "string") {
            throw new Error("Nome inválido. Insira o nome corretamente")
        } else (
            Teste1 = false
        )
    } catch (error) {
        console.error(`Erro: ${error.messsage}`);
    }
} while (Teste1);

let Teste2 = true
do {
    Teste2 = true
    try {
        var salarioP = parseFloat(readline.question("\nInforme seu salario: "))
        if (salarioP.length<1){
            throw new Error("Salario não informado. Informe um valor")
        } else if(typeof salarioP!= "number") {
            throw new Error("Valor inválido. Insira o valor corretamente")
        } else (
            Teste2 = false
        )
    } catch (error) {
        console.error(`\nErro: ${error.messsage}`);
    }
} while (Teste2);

let teste3 = true
do {
    teste3 = true
    try {
        var IdadeP = parseInt(readline.question("\nInforme sua idade: "))
        if (IdadeP.length<1){
            throw new Error("Idade não informada. Informe sua idade")
        } else if(typeof IdadeP!= "number") {
            throw new Error("Valor inválido. Insira o valor corretamente")
        } else (
            teste3 = false
        )
    } catch (error) {
        console.error(`\nErro: ${error.messsage}`);
    }
} while (teste3);

let teste4 = false
do {
    var diplomaTF
    teste4 = false
    var diplomaP = readline.questionInt(`\nPossui diploma?
    1 - sim        
    2 - nao
    : `)
    switch (diplomaP) {
        case 1:
            diplomaTF = "Possui"
            diplomaP = true
            break;
        case 2:
            diplomaTF = "Nao possui"
            diplomaP = false
        default:
            console.log("Valor incorreto, escolha uma opcao");
            teste4 = true
            break;
    }    
} while (teste4);
console.log(`\nNovo cadastro
-----------------------`);
console.log(`\nNome: ${nomeP}--- Tipo: ${typeof nomeP}
salario: ${salarioP}--- Tipo ${typeof salarioP}
Idade: ${IdadeP}--- Tipo: ${typeof IdadeP}
Diploma: ${diplomaTF}--- tipo: ${typeof diplomaP}
`);
let pessoaP = {
    nome: nomeP,
    Salario: salarioP,
    idade: IdadeP,
    diploma: diplomaP
}

Cad_Pessoas.push(pessoaP)
console.log(Cad_Pessoas);

