function perguntarConversao() {
  const perguntarConversão = prompt(
    `Olá, digite o seu nome para entrar no \n nosso sistema de  conversão de temperatura:`
  );

  if (perguntarConversão === null || perguntarConversão === "") {
    alert(`Preencha o seu nome =)`);
    perguntarConversao()
  }else{
    alert(`Obrigado por escolher o nosso sitema ${perguntarConversão} <3`);
  }
}

perguntarConversao();

const converterTemperatura = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };
  const converterTemperatura2 = (farenheit) => {
    return (farenheit - 32) * 5 / 9;
  };


  function digiteUmOuDois() {
    const escolherConversao = prompt(
        `Digite 1 se você quer converter de Celsius para Fahrenheit \n Digite 2 se você quer converter Farenheit para Celsius`
      );
      if(escolherConversao === null || escolherConversao === "" ) {
        alert('Digite um valor')
       return digiteUmOuDois()
      }

      return escolherConversao
  }


const escolherConversao  =   digiteUmOuDois()

console.log(escolherConversao)




switch(escolherConversao) {
    case '1':
      let escolherTemperatura =   prompt(`Agora digite a temperatura Celsius  \n que será convertida para Farenheit`)
        alert(`A conversão de ${escolherTemperatura} Celsius para Farenheit é: ${Math.floor(converterTemperatura(escolherTemperatura))}`)  
        break
        case '2':
            let escolherTemperaturaFarenheit = prompt(`Agora digite a temperatura Farenheit  \n que será convertida para Celsius`)
            alert(`A conversão de ${escolherTemperaturaFarenheit} Farenheit para Celsius é: ${Math.floor(converterTemperatura2(escolherTemperaturaFarenheit))}`)  
            break
                default:
                alert(`Ops, algo deu errado, tente reiniciar a página. \n Digite 1 ou 2 para prosseguir :(`)
}



