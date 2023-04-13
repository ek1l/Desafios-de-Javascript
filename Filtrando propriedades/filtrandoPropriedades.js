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
