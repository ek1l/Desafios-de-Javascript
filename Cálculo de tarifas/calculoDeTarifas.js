const idade = 61
const tarifa = 2.50 

    if(idade <= 6) {
        console.log(`Grátis`) 
     }else if(idade === 'estudantes') {
         console.log(`Você ganhou um desconto de 50% na tarifa e o valor caiu para ${tarifa / 2}`) 
     }else if(idade >= 60) {
         console.log(`Você ganhou um desconto de 30% de desconto na tarifa e o valor caiu para ${tarifa * 0.7}`) 
     }else if(idade === 'regular') {
         console.log(`Tarifa normal ${tarifa}`) 
     }else {
        console.log(`Não encontramos o seu tipo no sistema`)
     }



