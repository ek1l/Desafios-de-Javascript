function palindromo(str) {
    const strInvertida = str.split('').reverse().join('')
    return str.toLowerCase() === strInvertida
}



console.log(palindromo('roma é amor'))