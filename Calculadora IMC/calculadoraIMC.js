const pegarPeso = prompt(`Digite o seu peso`)
const pegarAltura = prompt(`Digite a sua altura`)
function resultado(peso,altura) {
    return peso / (altura * altura)
}

console.log(Math.floor(resultado(pegarPeso,pegarAltura)))








