// const subir = document.querySelector('#subir')
// const descer = document.querySelector('#descer')
// const div = document.querySelector('#movendo')


// let porcentagem = 0

// subir.addEventListener('click', () => {

//     for(let i = 0;i <= porcentagem;i++) {
//         div.style.bottom = `${porcentagem++}%` 
//         break  
//     }

// })

// let porcentagemDescer = 0


// descer.addEventListener('click', () => {

//     for(let i = 0;i >= porcentagemDescer;i--) {
//         div.style.bottom = `${porcentagemDescer--}%` 
//         break
          
//     }

// })

function moverItem(direcao) {
    const lista = document.querySelector("#listaMover")
    const itens = Array.from(lista.querySelectorAll("li"))
    const itemSelecionado = lista.querySelector(".selecionado")

    if(!itemSelecionado){
        alert(`Selecione um item`)
        return
    }

    const index = itens.indexOf(itemSelecionado)

    if(direcao === "cima" && index > 0) {
        lista.insertBefore(itemSelecionado, itens[index -1])
    }else if(direcao === "baixo" && index < itens.length -1){
        lista.insertBefore(itemSelecionado.nextElementSibling, itens[index])
    }
}



function selecionarItem(event) {
    const itens = document.querySelectorAll("#listaMover li")
    itens.forEach(item => item.classList.remove('selecionado'))
    event.target.classList.add('selecionado')
}

const itensDaLista = document.querySelectorAll("#listaMover li")

itensDaLista.forEach((item) => item.addEventListener("click",selecionarItem))


const botaoCima = document.querySelector("#moverCima")
const botaoBaixo = document.querySelector("#moverBaixo")


botaoCima.addEventListener('click',() => moverItem('cima'))

botaoBaixo.addEventListener('click',() => moverItem('baixo'))