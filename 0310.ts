const readline = require("readline-sync")
// //função sem parametro e sem retorno
// function SemReteSemPar(): void{
//     console.log("primeira função");
// }

// SemReteSemPar()

// //função com parametro e sem retorno
// function ComPareSemRet(nome:string): void{
//     console.log(`Olá, ${nome}!`);
// }

// ComPareSemRet("Deivyson")

// //função com parametro e com retorno
// function ComPareComRet(nome: string): string{
//     return `Olá, ${nome}, tudo bem com você?`
// }

// console.log(ComPareComRet("Deivyson"));

// //função sem parametro e com retorno
// function SemPareComRet(): string {
//     return `Essa função funciona perfeitamente!`
// }

// console.log(SemPareComRet());



// //Exercício refeitos de lógica de programação

// //exercicio 1
// function saudacao(): void {
//     console.log(`Olá, mundo!`);
// }
// saudacao()

// //exercicio 2
// function dobro(numero: number): void {
//     console.log(numero*2);
// }
// dobro(5)

// //exercicio 3
// function mostrarNumeros(numero_inicio: number,numero_final: number): void {
//     for (let i = Math.trunc(numero_inicio); i <= Math.trunc(numero_final); i++) {
//         console.log(i);
//     }
// }
// mostrarNumeros(10.5,20.77)

// //exercicio 4
// function verificarPar(numero_par: number): void {
//     if (numero_par%2==0) {
//         console.log(`O número ${numero_par} é par`);  
//     } else {
//         console.log(`O número ${numero_par} é ímpar`)
//     }
// }
// verificarPar(11)

// //exercicio 5
// const listaEx5: Array<string> = ["cebola", "tomate","pepino","alface"]
// function imprimirLista(): void {
//     for (const i of listaEx5) {
//         console.log(i);
//     }
// }
// imprimirLista()

// //exercicio 6
// const listaNumeros: Array<number> = [8,9,10]
// function media(): void {
//     let soma: number = 0
//     for (const i of listaNumeros) {
//         soma +=i
//     }
//     console.log((soma/listaNumeros.length).toFixed(2));
// }
// media()

// //exercicio 7
// const listanumeros_7: Array<number> = [2,5,7,8,9,10,45,67,81,4,6,7,19,43,93]
// function BuscarMaior(): void {
//     console.log(Math.max(...listanumeros_7))
// }
// BuscarMaior()

// //exercicio 8
// const letrasString: Array<string> = []
// function ContarVogais(texto: string): void {
//     let contagem = 0
//     for (const i of texto) {
//         letrasString.push(i)
//     }
//     for (const i of letrasString) {
//         if (i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
//             contagem++
//         }
//     }
//     console.log(`A quantidade de vogais no texto '${texto}' é igual a ${contagem}.`);
// }
// ContarVogais("ola, Deivyson, tudo bem com voce?")

// //exercicio 9
// function tabuada(numero_tabuada: number): void {
//     for (let i = 0; i <= 10; i++) {
//         console.log(`${numero_tabuada} x ${i} = ${numero_tabuada*i}`);
//     }
// }
// tabuada(7)

//exercicio 10
function verificarPrimo(numero_primo: number): void {
    let contagemPrimos = 0
    for (let i = numero_primo; i > 0; i--) {
        if (numero_primo%i==0){
            contagemPrimos++
        }
    }
    if (contagemPrimos>2) {
        console.log(`O número ${numero_primo} não é primo.`);
    } else {
        console.log(`O número ${numero_primo} é primo.`);
    }
}
verificarPrimo(1013)
