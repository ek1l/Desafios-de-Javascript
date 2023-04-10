const Z = 62

const fibonacci = n => {
    let a = 0
    let b = 1

    let sequencia = []

    while(a <= n){
        sequencia.push(a)
        const  temp = a
        a = b
        b = temp + a
    }
    return sequencia
    
}

const sequenciaFibonacci = fibonacci(Z)

console.log(`A sequência de Fibonacci até ${Z} é:, ${sequenciaFibonacci}`)

