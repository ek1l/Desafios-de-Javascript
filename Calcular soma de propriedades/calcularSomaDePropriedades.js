const obj = {
  a: 20,
  b: 30,
  c: 50,
  d: 90,
  e: 100,
  f: 10
};

const somarValorObjeto = (somarValor) => {
  let contador = 0;
  Object.values(somarValor).forEach((e) => {
    contador += e;
  });

  return contador;
};

console.log(somarValorObjeto(obj));
