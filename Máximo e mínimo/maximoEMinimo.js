const maximo = (n1, n2) => {
    if(n1 > n2) {
        return  `O maior número entre estes dois é ${n1}`
    }else{
        return `O maior número entre estes dois é ${n2}`
    }
}


console.log(maximo(10,8))





const minimo = (n1, n2) => {
if(n1 < n2) {
    return `O menor número entre estes dois é ${n1}`
}else {
    return `O menor número entre estes dois é ${n2}`
}
}

console.log(minimo(8,10))