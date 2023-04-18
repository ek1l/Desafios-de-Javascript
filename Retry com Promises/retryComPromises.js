function tentarNovamente(funcao, maxTentativas, intervalo) {
    return new Promise(async(resolve, reject) => {
        for(let tentativa = 1; tentativa <= maxTentativas; tentativa++) {
            try {
                const resultado = await funcao()
                return resolve(resultado)
            } catch (error) {
                if(tentativa === maxTentativas) return reject(error)
                await new Promise((r) => setTimeout(r, intervalo))
            }
        }
    })
}



const fetchComRetry = () => fetch('https://api.chucknorris.io/jokes/random?category=animal')


tentarNovamente(fetchComRetry,3, 1000)
.then((response) => response.json())
.then((dados) => console.log(dados))
.catch((erro) => console.log(`Falha após três tentativas`, erro))