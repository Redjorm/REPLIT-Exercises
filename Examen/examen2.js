function firstLetterOfEachWord (str) {
  let texto = str.split(" ")
  let primeraletra = []
  for (let i = 0; i < texto.length; i++) {
    primeraletra.push(texto[i].slice(0, (texto[i].length + 1) -  (texto[i].length)))
  }
  return primeraletra.join("")
}


console.log(firstLetterOfEachWord('Este ejercicio esta muy facil'))