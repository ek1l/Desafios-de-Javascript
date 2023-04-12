const parOuImpar = num => {
    if (num % 2 === 0) {
        return `Este número é par.`
    }else{
        return `Este número é ímpar`
    }
}

console.log(parOuImpar(10))