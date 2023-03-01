/* Instrucciones
Agrupa los animales por su primera letra en un objecto

A la funcion arrayToObject ( de vector a objecto ) se le pasa por parametro un arreglo con animales, recordar que este arreglo puede venir de todos los colores y tamaños, es decir, es dinamico, tu tarea es devolver un objecto.

por ejemplo

Recibimos esto por parametro


['abeja', 'aguila', 'araña', 'ballena', 'burro', 'cabra', 'cocodrilo', 'conejo', 'castor', 'zorro']
Entonces nuestra funcion debera retornar


{
  a: [ 'abeja', 'aguila', 'araña' ],
  b: [ 'ballena', 'burro' ],
  c: [ 'cabra', 'cocodrilo', 'conejo', 'castor' ],
  z: [ 'zorro' ]
} */

let animals = [
  'abeja',
  'abeja',
  'aguila',
  'araña',
  'ballena',
  'burro',
  'cabra',
  'zorro',
  'cocodrilo',
  'conejo',
  'castor'
]

function arrayToObject (animals) {
  let newarray = {}
  let hola = animals.sort(function (a, b) {
    if (a === b) {
      return 'HO'
    }
  })
  return hola
}

console.log(arrayToObject(animals))
