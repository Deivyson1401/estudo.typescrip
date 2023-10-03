const readline = require("readline-sync")
var numero1,numero2,numero, operador, repetidor,repetidor_primeiro_numero, repetidor_segundo_numero;
var repetidor_primeiro_operador, repetidor_segundo_operador, repetidor_numero, verificar_continuidade,sobra;
var resultado = 0
var contador = 1
const alfabeto = /[a-zA-Z]/
do {
    repetidor = true
    if (contador<2) {

        do{
            repetidor_primeiro_numero = false
            numero1 = readline.questionFloat("\ninforme o primeiro numero: ")
            if (alfabeto.test(numero1)==true) {
                console.log("\nInforme apenas números");
                repetidor_primeiro_numero = true
            }
            } while(repetidor_primeiro_numero)

            do{
                repetidor_segundo_numero = false
                numero2 = readline.questionFloat("\ninforme o segundo numero: ")
                if (alfabeto.test(numero2)==true) {
                    console.log("\nInforme apenas números");
                    repetidor_segundo_numero = true
                }
                } while(repetidor_segundo_numero)

        repetidor_primeiro_operador = false
        do {
            operador = readline.question("\nInforme o operador; +, -, /, % ou *: ")
            switch (operador) {
                case "+":
                    resultado = numero1 + numero2 
                    break;
                case "-":
                    resultado = numero1 - numero2 
                    break
                case "/":
                    sobra = numero1 % numero2 
                    resultado = numero1 / numero2 
                    break
                case "%":
                    resultado = numero1 % numero2 
                    break
                case "*":
                    resultado = numero1 * numero2 
                    break
                default:
                    console.log(`\nopção inválida`);
                    repetidor_primeiro_operador = true
                    break;
            }
        } while(repetidor_primeiro_operador)
    }

    if (contador>1) {
        repetidor_segundo_operador = false
        do {
            do{
                repetidor_numero = false
                numero = readline.questionFloat("\ninforme o numero: ")
                if (alfabeto.test(numero)==true) {
                    console.log("\nInforme apenas números");
                    repetidor_numero = true
                }
                } while(repetidor_numero)

            operador = readline.question("Informe o operador; +, -, /, % ou *: ")
            switch (operador) {
                case "+":
                    resultado = resultado + numero 
                    break;
                case "-":
                    resultado = resultado - numero
                    break
                case "/":
                        sobra = resultado%numero
                        resultado = resultado / numero
                    break
                case "%":
                    resultado = resultado % numero
                    break
                case "*":
                    resultado = resultado * numero
                    break
                default:
                    console.log(`\nopção inválida`);
                    repetidor_segundo_operador = true
                    break;
            }
        } while(repetidor_segundo_operador)
    }

    console.log(`\nResultado: ${resultado}`);
    if (operador=="/"&&resultado%numero!=0) {
        console.log(`Sobra: ${sobra}`);
    }
    verificar_continuidade = readline.question("\nDesena continuar? s/n: ")
    switch (verificar_continuidade) {
        case "s":
            break;
        default:
            repetidor = false
            break;
    }
    contador++
} while (repetidor);