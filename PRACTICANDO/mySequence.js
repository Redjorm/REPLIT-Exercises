/* # Instrucciones

  **Deberás ingeniártelas para encontrar el patrón**

  La función `mySequence()` recibe como parámetros 1 número entero: <br>
  Tu deber es encontrar que tiene que ver ese número entero con el arreglo que se retorna<br>

  por ejemplo, recibes el `3`, por lo tanto, retornas este arreglo
  <pre><code>
  [ '010', '101', '010' ]
  </code></pre>

  por ejemplo, recibes el `4`, por lo tanto, retornas este arreglo
  <pre><code>
  [ '0101', '1010', '0101', '1010' ]
  </code></pre>

  por ejemplo, recibes el `5`, por lo tanto, retornas este arreglo
  <pre><code>
[ '01010', '10101', '01010', '10101', '01010' ]
  </code></pre>

 */

function mySequence (num) {
  let array = []
  for (let i = 0; i < num; i++) {
    let numero = ''
    if (i % 2 == 0) {
      for (let j = 0; j < num; j++) {
        if (j % 2 == 0) {
          numero += '0'
        } else {
          numero += '1'
        }
      }
      array.push(numero)
    } else {
      for (let j = 0; j < num; j++) {
        if (j % 2 == 0) {
          numero += '1'
        } else {
          numero += '0'
        }
      }
      array.push(numero)
    }
  }
  return array
}

console.log(mySequence(4))

/* for (let j = 0; j < num; j++) {
    if (j % 2 == 0) {
      numero += '0'
    } else {
      numero += '1'
    }
  }
  array.push(numero) */
