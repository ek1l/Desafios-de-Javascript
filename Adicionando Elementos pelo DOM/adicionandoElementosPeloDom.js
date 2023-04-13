function adicionarItem() {
    const novoItem = document.createElement("li")

    novoItem.textContent = "Novo item"

    document.querySelector('.lista').appendChild(novoItem)
}

const botaoAdicionar = document.querySelector('#adicionarItem')


botaoAdicionar.addEventListener('click', adicionarItem)