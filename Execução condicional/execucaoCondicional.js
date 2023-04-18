function execucaoCondicional(verificar, executar, naoExecutar) {
    if(verificar()) {
        executar()
    }else {
        naoExecutar()
    }
}

execucaoCondicional(
    () => 5 > 3,
    () => console.log("5 é maior que 3"),
    () => console.log("Condiçaõ inválida")
)