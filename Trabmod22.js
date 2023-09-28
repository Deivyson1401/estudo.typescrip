let num1,num2,num3,media
const Verificacao = /[a-zA-Z]/

let teste1 = false
do {
    teste1 = false
    num1 = parseInt(prompt("\nInforme a primeira nota"))
if (num1.length<1) {
    num1 = 0
}
if (num1>10||num1<0){
    alert(`\nInforme um valor entre 0 e 10`);
    teste1 = true
}
if (Verificacao.test(num1)) {
    alert("Valor inserido incorretamente. informe um valor entre 0 e 10");
    teste1 = true
}
} while (teste1);

let teste2 = false
do {
    teste2 = false
    num2 = parseInt(prompt("\nInforme a segunda nota"))
if (num2.length<1) {
    num2 = 0
}
if (num2>10||num2<0){
    alert(`\nInforme um valor entre 0 e 10`);
    teste1 = true
}
if (Verificacao.test(num2)) {
    alert("Valor inserido incorretamente. informe um valor entre 0 e 10");
    teste2 = true
}
} while (teste2);

let teste3 = false
do {
    teste3 = false
    num3 = parseInt(prompt("\nInforme a terceira nota"))
if (num3.length<1) {
    num3 = 0
}
if (num3>10||num3<0){
    alert(`\nInforme um valor entre 0 e 10`);
    teste3 = true
}
if (Verificacao.test(num3)) {
    alert("Valor inserido incorretamente. informe um valor entre 0 e 10");
    teste3 = true
}
} while (teste3);

media = (num1,num2,num3)/3

alert(`A media das notas é igual a ${media.toFixed(2)}`);