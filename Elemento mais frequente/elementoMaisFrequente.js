const elementoMaisFrequente = arr => {
    contador = {}

    let elemento = arr[0]

    let maxContagem = 1

    for(const valor of arr) {
        if(!contador[valor]){
            contador[valor] = 1
        }else {
            contador[valor]++
        }
        if(contador[valor] > maxContagem) {
            maxContagem = contador[valor]
            elemento = valor
        }
    }
    return [elemento, maxContagem]
}



const numeros = [2,3,4,2,1,5,2,1,4]
const resultadoFrequencia = elementoMaisFrequente(numeros)

console.log(`O elemento mais frquente no array é: ${resultadoFrequencia[0]} e ele apareceu ${resultadoFrequencia[1]} vezes.`)
  