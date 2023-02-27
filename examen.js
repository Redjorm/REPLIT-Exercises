{
  /* Instrucciones
Encuenta N cantidad de múltiplos de un número

La función getNMultiples() recibe como parámetros dos números:

Tu labor es encontrar los múltiplos del primer número (sin incluir este número) tantas veces como te lo indique el segundo número.

Explicado de otra forma: El primer número es el número del que obtendrás los múltiplos y el segundo número es la cantidad de múltiplos que obtendrás.

Ejemplo:
Si la función recibe 20 y 2 deberías retornar un arreglo como el siguiente [40, 60], ya que estamos obteniendo 2 multiplos del 20.

Ejemplo 2:
Si la función recibe 3 y 4 deberías retornar un arreglo como el siguiente [6, 9, 12, 15], ya que estamos obteniendo 4 múltiplos de 3.

*Recuerda utilizar return para devolver tu solución.
*Los números que recibe la función podrán ser dos números cualesquiera. */
  /* 
  function getNMultiples (number, totalMultiples) {
    let multiplos = []
    for (let i = 2; i < totalMultiples + 2; i++) {
        multiplos.push(number * i)
    }
    return multiplos
  }

  console.log(getNMultiples(20,2)); */
}

{
  /*     Instrucciones
Invierte el texto

La función reverseText() recibe como parámetros un string:

Tu labor es invertir este string.

Ejemplo:
Si tu función recibe "Hola" debes retornar aloH.

Ejemplo 2:
Si tu función recibe "Ya es muy tarde" debes retornar edrat yum se aY.

*Recuerda utilizar return para devolver tu solución.
*Tu solución debe de funcionar para cualquier string.
*Tip: Puedes apoyarte en el método reverse de Javascript (que solo funciona para arreglos). */
  /* 
function reverseText(text) {
    return text.split("").reverse().join("")
}

console.log(reverseText("Ya es muy tarde")); */
}

{
  /* Instrucciones
Encuentra la letra que más se repite

La función findMostCommonLetter() recibe como parámetro un string

Tu labor es encontrar y retornar la letra que se repite más veces.

Ejemplo:
Si recibes la frase 'Hola, me gusta la programación' tienes que retornar la letra a ya que esta es la que se repite más veces

*Recuerda utilizar return para devolver tu solución.
*El string que recibe la función puede ser cualquiera. */
  function findMostCommonLetter (text) {
    let letras = {}
    let palabraMasRepetida
    let valorMaximo = 0

    for (const i of text) {
      if (letras[i]) {
        letras[i] = letras[i] + 1
      } else {
        letras[i] = 1
      }
    }

    for (const i in letras) {
      if (letras[i] > valorMaximo) {
        palabraMasRepetida = i
        valorMaximo = letras[i]
      }
    }
    return palabraMasRepetida
  }

  console.log(findMostCommonLetter('Hola, me gusta la programación'.split('')))
}

{
  /*  Le pasamos un string a la funcion firstLetterOfEachWord() y nos retornara un string con la primera letra de cada palabra que contiene el string

Ejemplo
firstLetterOfEachWord('hola mundo') retorna hm

firstLetterOfEachWord('Este ejercicio esta muy facil') retorna Eeemf

firstLetterOfEachWord('hubiera sido mejor Futbolista') retorna hsmF */

  function firstLetterOfEachWord (str) {
    let texto = str.split(' ')
    let primeraletra = []

    for (const i of texto) {
      primeraletra.push(i.at(0))
    }
    return primeraletra.join('')
  }

  console.log(firstLetterOfEachWord('Este ejercicio esta muy facil'))
}
