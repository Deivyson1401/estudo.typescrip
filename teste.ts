const readline1 = require("readline-sync")
let nome: string = "Deivyson"
let n1: number = 10
let n2: number = 15
let soma: number = n1+n2

console.log(nome);
console.log(soma);

const numero = readline.question("informe: ")
const regex = /[a-zA-Z]/;
console.log(regex.test(numero));

var texto: string
var numeros: number
var booleano: boolean
var vazio: null
var indefinido: undefined
var simbolo: symbol
let listaNumber: number[]
let listaString: string[]
let listaBoolean: boolean[]
let onjeto: object

numeros = 1050
console.log(numeros.toFixed(2));
numeros = 2000
console.log(numeros.toPrecision(6));
numeros = 5000
console.log(numeros.toString())
numeros = 10000
console.log(isFinite(numeros));
numeros = 565600
console.log(numeros.toExponential());

texto = "Deivyson"
console.log(texto.indexOf("a"));
texto = "Mosaico"
console.log(texto.charAt(5));
texto = " Dale boy "
console.log(texto.trim());
texto = "iae, "
let texto2:string = "Comparça"
console.log(texto.concat(texto2));

listaString = ["azul","Amarelo","verde","roxo"]
console.log(listaString);
listaString.push("Vermelho")
console.log(listaString);
console.log(listaString.pop())
console.log(listaString);
listaString.shift()
console.log(listaString);
listaString.unshift("laranja")
console.log(listaString);
let novalista: Array<string> = ["branco", "preto"]
console.log(listaString.join(" - "));
console.log(listaString.concat(novalista).join(" - "));

enum tipousuario {
    administrativo,
    usuariocomum,
    convidado
}

let usuario = readline.question("informe o usuario: ")

if (usuario) {
    
} else {
    
}
















