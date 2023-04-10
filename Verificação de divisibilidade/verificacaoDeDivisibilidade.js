const divisivel = (num1,num2) => {
    if(num1 % num2 === 0) {
      return  'É divisível'
    }else {
      return  'Não é divisível'
    }

}


console.log(divisivel(300,100))