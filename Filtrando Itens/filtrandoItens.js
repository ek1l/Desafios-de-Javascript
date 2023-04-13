



const inputText = document.querySelector('input')
const itens = document.querySelectorAll('.item')

inputText.addEventListener('keyup', (e) => {
    const value = inputText.value.toLowerCase()
    const filteredItens = Array.from(itens).filter((item) => {
        return item.textContent.toLowerCase().includes(value)
    })
    itens.forEach((item) => {
        if (!filteredItens.includes(item)) {
            item.remove()
        }
    })
})
