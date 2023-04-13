const pegarLi = document.querySelectorAll('.item')


pegarLi.forEach((e,idx) => {
e.addEventListener('click', () => {
    e.remove(idx)
    console.log(`Removido ${idx}`)
})
})