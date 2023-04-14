function temporizador(temporizador, funcao) {
  setTimeout(() => {
    funcao();
  }, temporizador);
}

const funcao = () => {
  console.log(`Fui chamado`);
};

temporizador(2000, funcao);
