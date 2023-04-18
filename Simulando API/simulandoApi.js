function simularAPI(resultado, demora) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(resultado)
        }, demora)

    })
}



simularAPI("olá",3000)
.then(resolve => console.log(resolve))