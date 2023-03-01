/* Instrucciones
Devuelve un string en mayuscula pero que las primeras letras de cada palabra sean minusculas

Por parametro te enviare cualquier string ( cadena de carecterer ) en mayuscula, y tu tendras que devolverme ese mismo string pero cada palabra debera empezar en minuscula

Por ejemplo

Te envio esto por parametro
PROFE UNA PREGUNTA, QUE ES NOTION?

Tu retornaras esto
pROFE uNA pREGUNTA, qUE eS nOTION? */

function firtsLetterLower (str) {
  let arraystr = str.split(' ')
  let array = []
  let letra1 = ''
  let resto = ''
  for (let i = 0; i < arraystr.length; i++) {
    letra1 = arraystr[i].slice(0, 1)
    letra1 = letra1.toLocaleLowerCase()
    resto = arraystr[i].slice(1, arraystr[i].length)
    array.push(letra1 + resto)
  }

  return array.join(' ')
}

console.log(firtsLetterLower('PROFE UNA PREGUNTA, QUE ES NOTION?'))
