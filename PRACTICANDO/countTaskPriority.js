/* Instrucciones
Contando la cantidad de tareas y devolviéndolas en un objeto

La función countTaskPriority() recibe como parámetros 1 arreglo:
El arreglo es una lista de tareas con una estructura como la siguiente

[
  {name: 'hacer la cama', priority: '1'},
  {name: 'hacer el desayuno', priority: '2'},
  {name: 'hacer el almuerzo', priority: '3'},
  {name: 'practicar ingles', priority: '1'},
  {name: 'preparar la clase', priority: '3'},
  {name: 'dar la clase', priority: '3'},
  {name: 'ir al gym', priority: '1'}
]
Tu labor es devolver un objeto contando la cantidad de tareas por prioridad, con una estructura como la siguiente

{ 
  '1': 3, 
  '2': 1, 
  '3': 3 
}
Recibes este arreglo de tareas:
    [
      {name: 'hacer la cama', priority: 'verde'},
      {name: 'hacer el desayuno', priority: 'naranja'},
      {name: 'hacer el almuerzo', priority: 'naranja'},
      {name: 'practicar ingles', priority: 'naranja'},
      {name: 'preparar la clase', priority: 'verde'},
      {name: 'dar la clase', priority: 'rojo'},
      {name: 'ir al gym', priority: 'rojo'}
    ]
Deberás devolver un objeto con esta estructura:

    { 
      verde: 2, 
      naranja: 3, 
      rojo: 2 
    } */

let array = [
  { name: 'hacer la cama', priority: '1' },
  { name: 'hacer el desayuno', priority: '2' },
  { name: 'hacer el almuerzo', priority: '3' },
  { name: 'practicar ingles', priority: '1' },
  { name: 'preparar la clase', priority: '3' },
  { name: 'dar la clase', priority: '3' },
  { name: 'ir al gym', priority: '1' }
]

function countTaskPriority (array) {
  let object = {}
  for (let i = 0; i < array.length; i++) {
    //console.log(array[i].priority)
    if (object[array[i].priority]) {
      object[array[i].priority] = object[array[i].priority] + 1
    } else {
      object[array[i].priority] = 1
    }
  }
  return object
}

console.log(countTaskPriority(array))
