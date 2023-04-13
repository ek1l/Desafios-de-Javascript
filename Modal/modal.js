const exibir = document.querySelector('#exibir')
const modal = document.querySelector('#modal')
const fechar = document.querySelector('#fechar')

exibir.addEventListener('click', () => {
    modal.style.display = 'block'
    exibir.style.display = 'none'
})


fechar.addEventListener('click', () => {
    modal.style.display = 'none'
    exibir.style.display = 'block'
})