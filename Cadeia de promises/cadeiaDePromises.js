async function executarEmSequencia(urls) {
    const dadosArray = []
    for(const url of urls) {
        const dados = await carregarDadosFetch(url)
        dadosArray.push(dados)
    }

    return dadosArray
}


const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3"
]


executarEmSequencia(urls).then((dadosArray) => {
    console.log(dadosArray)
})