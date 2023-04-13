const pegarDiv = document.querySelector('.desativado')
const pegarBotao = document.querySelector('.mudarCor')

pegarBotao.addEventListener('click', () => {
    pegarDiv.classList.toggle('ativo')
})