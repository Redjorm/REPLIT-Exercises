/* # Instrucciones

  **Deberás codificar en un lenguaje desconocido cualquier mensaje**

  La función `codeBrayincy()` recibe como parámetros 1 objeto con el codigo: <br>
  el cual es un objeto con la `key` en nuestro alfabeto y el `value` en el alfabeto codificado<br>

  <details>
    <summary>Ver objeto:</summary>
    <pre><code>
    {
      a: '!', 
      b: '@', 
      c: '#',
      d: '$', 
      e: '%', 
      f: '^', 
      g: '&', 
      h: '*', 
      i: '(', 
      j: ')', 
      k: '-', 
      l: '_', 
      m: '=', 
      n: '+', 
      o: '[', 
      p: '{', 
      q: ']', 
      r: '}', 
      s: '¿', 
      t: ':', 
      u: ';', 
      v: ',',
      w: '.', 
      x: '<', 
      y: '>', 
      z: '?',
      ' ': '~', 
      ',': '|'
    }
    </code></pre>
</details>

y también recibe como parámetro una cadena de caracteres, que puede ser cualquiera, eso si, no hay tildes en esta cadena <br> 

Veamos estos ejemplos 
  <details>
    <summary>Ejemplo 1:</summary>
    si recibe este string: esto se descontrolo<br> retorna este string: %¿:[~¿%~$%¿#[+:}[_[
  </details>

  <details>
    <summary>Ejemplo 2:</summary>
    si recibe este string: puka quiere a garu<br> retorna este string: {;-!~];(%}%~!~&!};
  </details>

  <details>
    <summary>Ejemplo 3:</summary>
    si recibe este string: divertido amor, come fideos<br> retorna este string: $(,%}:($[~!=[}|~#[=%~^($%[¿
  </details>


 */

let code = {
  a: '!',
  b: '@',
  c: '#',
  d: '$',
  e: '%',
  f: '^',
  g: '&',
  h: '*',
  i: '(',
  j: ')',
  k: '-',
  l: '_',
  m: '=',
  n: '+',
  o: '[',
  p: '{',
  q: ']',
  r: '}',
  s: '¿',
  t: ':',
  u: ';',
  v: ',',
  w: '.',
  x: '<',
  y: '>',
  z: '?',
  ' ': '~',
  ',': '|'
}

let frase = 'esto se descontrolo'

function codeBrayincy (code, phrase) {
  let arrayphrse = phrase.split('')
  let array = []
  for (let i = 0; i < arrayphrse.length; i++) {
    for (const j in code) {
      if (arrayphrse[i] == j) {
        array.push(code[j])
      }
    }
  }
  return array.join('')
}
//console.log(code.e)
console.log(codeBrayincy(code, frase))
