const compararNumeros = (num1, num2) => {
    if(num1 > num2) {
       return `Número: ${num1} é maior que número: ${num2}`
    }else if(num1 < num2) {
        return `Número: ${num1} é menor que número: ${num2}`
    }else if(num1 === num2) {
        return `Número: ${num1} é igual ao número: ${num2}`
    }
}

console.log(compararNumeros(30,10))