const pessoaUm = {
    nome: 'Leonardo',
    idade: 19,
    cidade: 'Sete Lagoas',
    lazer:['estudar', 'Jogar games', 'Dançar']
}

const pessoaDois = {
    nome: 'Ane',
    idade: 21,
    cidade: 'Jequitibá',
}



const unirObjetos = (obj1, obj2) => {
    return Object.assign(obj1,obj2)
}

console.log(unirObjetos(pessoaUm,pessoaDois))



// const objetoA = {a: 1, b: 2}

// const objetoB = {nome: "Mateus", trabalhando: true}

// function unirObjetos(obj1, obj2) {
//     return {...obj1, ...obj2}
// }

// console.log(unirObjetos(objetoA,objetoB))