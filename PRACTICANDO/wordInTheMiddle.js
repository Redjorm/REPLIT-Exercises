/* Instrucciones
Encuentra el centro de la oración

La función wordInTheMiddle() recibe como parámetro un string, recuerda que es cualquier string
En algunos casos la función retornará una sola palabra y en otras retornará un string con dos palabras
Quizá la clase este en el número de palabras que tiene el string.

Si la función recibe wordInTheMiddle('hola mi nombre es kakaroto') deberá retornar 'nombre'

Si la funcion recibe wordInTheMiddle('hola mi nombre es son goku') debera retornar 'nombre es' */

function wordInTheMiddle (phrase) {
  let phraseArray = phrase.split(' ')
  let mid = phraseArray.length / 2
  let newarray = []
  if (mid % 2 == 0) {
    for (let i = mid - 1; i < mid + 1; i++) {
      newarray.push(phraseArray[i])
    }
    return newarray.join(' ')
  } else {
    for (let i = mid - 0.5; i < mid + 0.5; i++) {
      newarray.push(phraseArray[i])
    }
    return newarray.join(' ')
  }
}

console.log(wordInTheMiddle('hola mi estadio estadio'))

/* if (mid % 2 == 1) {
    for (let i = mid - 1; i < mid; i++) {
      console.log('QUE?')
    }
    return mid
  } else {
    for (let i = mid - 1; i < mid + 1; i++) {
      console.log(phraseArray[i])
    }
    return mid
  }
} */
