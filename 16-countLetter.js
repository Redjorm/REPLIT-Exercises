/* Instrucciones
Cuenta las veces que se repite una letra

La función countLetter() recibe como parámetros dos strings:

El primer string es una frase cualquiera.

El segundo string es una letra cualquiera.

Tu labor es encontrar cuántas veces se repite la letra en el string.

Ejemplo:
Si tu función recibe como frase "Hola, me llamo Erik" y como letra "a" debes retornar 2, ya que la letra "a" se encuentra 2 veces en la frase.

*Recuerda utilizar return para devolver tu solución.
*Tu solución debe de funcionar para cualquier frase y cualquier letra. */

let frase = 'Hola, me llamo Erik'

function countLetter (phrase, letter) {
  let words = {}

  for (const i of phrase) {
    if (words[i]) {
      words[i] = words[i] + 1
    } else {
      words[i] = 1
    }
  }
  return words[letter]
}

console.log(countLetter(frase.split(' ').join('').split(''), 'a'))
