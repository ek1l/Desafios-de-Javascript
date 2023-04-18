const url = 'https://jsonplaceholder.typicode.com/posts/1'

const resgatandoDados = async () => {
     const pegandoAPI = await fetch(url)
     if(pegandoAPI.status === 200) {
        return await pegandoAPI.json()
     }else if (pegandoAPI.status >= 300) {
       return `OPS... Algo deu errado.`
     }
   
}

const pegueiOsResultados = async () => {
    const resultado = await resgatandoDados()
    console.log(resultado)
}

pegueiOsResultados()








