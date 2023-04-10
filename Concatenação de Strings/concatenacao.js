const nome = prompt(`Digite o seu nome`)
const idade = prompt(`Digite a sua idade`)
const cidade = prompt(`Digite a sua cidade`)

const concatenar = (nome, idade, cidade) => {
  return `Olá, ${nome}, você tem ${idade} anos e mora em ${cidade}. Certo? =D`
}

alert(concatenar(nome, idade, cidade ))