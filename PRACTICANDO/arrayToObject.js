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
  let object = {}
  for (let i = 0; i < animals.length; i++) {
    if (object[animals[i].slice(0, 1)]) {
      object[animals[i].slice(0, 1)].push(animals[i])
    } else {
      object[animals[i].slice(0, 1)] = [animals[i]]
    }
  }
  return object
}

console.log(arrayToObject(animals))
//console.log(animals[i].slice(0, 1))
