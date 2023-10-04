function TradicionaSemParametro() {
    console.log(`Essa função não tem parametro!`);
}
TradicionaSemParametro()

function TradicionalComParametro(Nome,idade){
    console.log(`Olá, ${Nome}, você tem ${idade} anos!`);
}
TradicionalComParametro("Deivyson",22)


var ArrowFunctionComParametro = (numero1,numero2) => (numero1+numero2)/2
console.log(`A média é igual a ${ArrowFunctionComParametro(10,20)}`);