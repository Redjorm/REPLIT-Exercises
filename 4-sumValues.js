/* Instrucciones
Suma los elementos de un arreglo

La función sumValues() recibe como parámetro un arreglo con 3 elementos de tipo Number, tu labor es tomar los
3 valores y sumarlos, en esta ocasión tendrás que hacer que la función sumValues los retorne utilizando return.

Ejemplo: Si el array que recibe es [1, 2, 3], deberás utilizar return para devolver 6 que es la suma de todos los elementos. */

/* 
Primera version

function sumValues (array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
} */

function sumValues (array) {
  return array.reduce((pre, cur) => pre + cur, 0)
}

console.log(sumValues([1, 2, 3]))

/* const sumall = fruits.map(item => item.amount).reduce((prev, curr) => prev + curr, 0);
console.log(sumall); */
