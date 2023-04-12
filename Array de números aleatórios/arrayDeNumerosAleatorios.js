// const pushNumeroAleatorio = (qntd) => {
//     const arrayDeNumero = []
//     for(let i = 0; i < qntd;i++) {
//         if(qntd > 50) {
//             console.log(`O array atingiu o limite`)
//             break
//         }else {
//             arrayDeNumero.push(parseInt(Math.random() * qntd))
            
//         }
        
//     }
//     return arrayDeNumero
    
// }
// console.log(pushNumeroAleatorio(40))



const gerarArrayAleatorio = (tamanho,maxValor) => {
const array = []
for(let i = 0; i< tamanho; i++) {
        array.push(Math.floor(Math.random() * (maxValor +1)))
}
return array
} 

const tamanho = 10;
const maxValor = 50

const resultadoArray = gerarArrayAleatorio(tamanho, maxValor)

console.log(`O array gerado de números aleatórios é: [${resultadoArray.join(",")}]`)