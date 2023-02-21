/* Sumando números pares en un rango

La función sumEvens() recibe como parámetros dos números:

Tu labor es sumar todos los números pares que se encuentren en el rango de los números recibidos, sin incluir a los dos números recibidos.

Ejemplo:
Si tu función recibe 20 y 30 deberías retornar 100, ya que los números pares entre 20 y 30 son 22, 24, 26, 28 y la suma de todos estos números es 100.

*Recuerda utilizar return para devolver tu solución.
*El segundo número recibido siempre será mayor al primero. */

function sumEvens (start, end) {
  let suma = 0
  for (let i = start + 1; i < end; i++) {
    if (i % 2 == 0) {
      suma += i
    }
  }
  return suma
}

console.log(sumEvens(20, 30))
