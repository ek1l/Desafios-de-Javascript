const objValues = {
  nome: "Leonardo",
  idade: 19,
  Profissao: "Front-End",
  pet: "Gato",
};

const filtrarObjeto = (obj, filter) => {
  let arrNovo = [];

  for (const chave in obj) {
    filter.forEach((e) => {
      if (
        chave === e &&
        obj.hasOwnProperty(chave) &&
        !arrNovo.includes(`${chave}: ${obj[chave]}`)
      ) {
        arrNovo.push(`${chave}: ${obj[chave]}`);
      }
    });
  }

  return arrNovo;
};

console.log(
  filtrarObjeto(objValues, ["pet", "nome", "idade", "Profissao", "Profissao"])
);



// const pessoa = {
//     nome: "João",
//     idade: 30,
//     profissao: "Engenheiro",
//     hobbies: ["Futebol", "Leitura", "Viagens"]
// }


// function filtrarPropriedades(obj,propriedadesPermitidas) {
//     const newObj = {}

//     for(const prop of propriedadesPermitidas) {
//         if(obj.hasOwnProperty(prop)) {
//             newObj[prop] = obj[prop]
//         }
//     }
//     return newObj
// }



// const propriedadesPermitidas = ["nome", "profissao"]

// const pessoaFiltrada = filtrarPropriedades(pessoa, propriedadesPermitidas)

// console.log("Objeto pessoa filtrado com propriedades permitidas.")
// console.log(pessoaFiltrada)

