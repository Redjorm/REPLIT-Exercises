/* PRIMERA VERSION

function findLastLetter (text) {
  return text.split('').at(-1)
} */

function findLastLetter (text) {
  return text.slice(-1)
}

console.log(findLastLetter("Hola, me llamo Erik"));