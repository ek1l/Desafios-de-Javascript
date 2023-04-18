function simulandoApi(resolver, tempo) {
  return new Promise( (resolve, reject) => {
    try {
      setInterval(() => {
        resolve(resolver);
      }, tempo);
    } catch (error) {
        reject(error);
    }
  });
}

const resultado = ["gosto de:", { nome: "leonardo", games: "The Witcher 3" }];

simulandoApi(resultado, 2000)
.then(res => console.log(res))
.catch(error => console.log(error))
  