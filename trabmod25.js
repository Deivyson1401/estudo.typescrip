const readlinesync = require("readline-sync")
const Banco = {
    conta: "86934576",
    saldo: 1250.85,
    Tipo_conta: "Poupança",
    Agência: "48",

    buscarSaldo: function(){
        let valor_em_conta = Banco.saldo
        let valor_em_texto = valor_em_conta.toString()
        let transformador_em_reais = []
        let contador_centavos = 0
        let contador_algarismos = 0
        for (let i = valor_em_texto.length; i >0; i--) {
            if (contador_centavos==3){
                transformador_em_reais.unshift(",")
                contador_centavos++
            } else if (contador_centavos<3){
                contador_centavos++
            }
            if (valor_em_texto[i-1]==","){
                contador_algarismos=0
            }else if (contador_algarismos==3) {
                transformador_em_reais.unshift(".")
                contador_algarismos=0
            }else if (transformador_em_reais.indexOf(",")!=-1){
                contador_algarismos++
            }
            if (valor_em_texto[i-1]==".") {
                continue
            }else{
            transformador_em_reais.unshift(valor_em_texto[i-1])
            }
        }
        let saldo = ""
        for (let i = 0; i < transformador_em_reais.length; i++) {
            saldo = saldo+transformador_em_reais[i] 
        }
        console.log(`Saldo: R$${saldo}`)
    },

    deposito: function(){
        let valor_deposito = readlinesync.questionFloat("informe o valor a ser depositado: ")
        Banco.saldo = Banco.saldo+valor_deposito
        Banco.buscarSaldo();
    },

    saque: function () {
        let valor_saque = readlinesync.questionFloat("informe o valor a ser sacado: ")
        Banco.saldo = Banco.saldo-valor_saque
        Banco.buscarSaldo();
    },

    NumeroConta: function(){
        console.log(Banco.conta);
    }
}

let teste = true
let opcao
let verificacao = false
do {
    do{
        verificacao = false
        console.log(`\n1 - Ver saldo
        2 - deposito
        3 - saque
        4 - numero da conta`)
            opcao = readlinesync.questionInt("Informe uma opção:")
            switch (opcao) {
                case 1:
                    Banco.buscarSaldo()
                    break;
                case 2:
                    Banco.deposito()
                    break;
                case 3:
                    Banco.saque()
                    break
                case 4:
                    Banco.NumeroConta()
                    break
                default:
                    console.log(`\nopcao inválida`);
                    verificacao = true
                    break;
          }
    }while(verificacao)
    let teste2
    let continuacao
    do {
        teste2 = true
        continuacao = readlinesync.question("Continuar? s/n: ")
        switch (continuacao) {
            case "s":
                teste2 = false
                break;
            case "n":
                teste2 = false
                teste = false
                break
            default:
                console.log(`\nopcao invalida`);
                break;
        }
    } while (teste2);
} while (teste);



