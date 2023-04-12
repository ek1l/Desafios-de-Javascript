const arr = [1,2,3,4,5,4,3,2,7,8,10,22,22]
let arrNaoDuplicado = []

arr.forEach((elemento) => {
    if(!arrNaoDuplicado.includes(elemento)) {
        arrNaoDuplicado.push(elemento)   
    }
})

console.log(arrNaoDuplicado)

