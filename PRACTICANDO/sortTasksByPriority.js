/* # Instrucciones

  **Deberás devolver un objeto que separe las prioridades**

  La función `sortTasksByPriority()` recibe como parámetros 1 arreglo: <br>
  El arreglo es una lista de tareas con una estructura como la siguiente
<pre><code>
[
  {name: 'hacer la cama', priority: '1'},
  {name: 'hacer el desayuno', priority: '2'},
  {name: 'hacer el almuerzo', priority: '3'},
  {name: 'practicar ingles', priority: '1'},
  {name: 'preparar la clase', priority: '3'},
  {name: 'dar la clase', priority: '3'},
  {name: 'ir al gym', priority: '1'}
]
</code></pre>

Tu labor es devolver un objeto que tenga la `key` de la prioridad y su `value` sea un arreglo con el nombre de esa tarea, deberías devolver este objeto

<pre><code>
{
  '1': [
    'hacer la cama',
    'practicar ingles',
    'ir al gym'
  ],
  '2': [ 'hacer el desayuno' ],
  '3': [
    'hacer el almuerzo',
    'preparar la clase',
    'dar la clase'
  ]
}
</code></pre>

<details>
    <summary>Otro ejemplo:</summary>
    Recibes este arreglo de tareas: 
    <pre><code>
[
  {name: 'hacer la cama', priority: 'verde'},
  {name: 'hacer el desayuno', priority: 'naranja'},
  {name: 'hacer el almuerzo', priority: 'naranja'},
  {name: 'practicar ingles', priority: 'naranja'},
  {name: 'preparar la clase', priority: 'verde'},
  {name: 'dar la clase', priority: 'rojo'},
  {name: 'ir al gym', priority: 'rojo'}
]
    </code></pre>
    Deberás devolver un objeto con esta estructura: 
    <pre><code>
{
  verde: [ 'hacer la cama', 'preparar la clase' ],
  naranja: [
    'hacer el desayuno',
    'hacer el almuerzo',
    'practicar ingles'
  ],
  rojo: [ 'dar la clase', 'ir al gym' ]
}
    </code></pre>
</details> */

let array = [
  { name: 'hacer la cama', priority: '1' },
  { name: 'hacer el desayuno', priority: '2' },
  { name: 'hacer el almuerzo', priority: '3' },
  { name: 'practicar ingles', priority: '1' },
  { name: 'preparar la clase', priority: '3' },
  { name: 'dar la clase', priority: '3' },
  { name: 'ir al gym', priority: '1' }
]

function sortTasksByPriority (array) {
  let object = {}
  for (let i = 0; i < array.length; i++) {
    if (object[array[i].priority]) {
      object[array[i].priority].push(array[i].name)
    } else {
      object[array[i].priority] = [array[i].name]
    }
  }
  return object
}

console.log(sortTasksByPriority(array))

/* function countTaskPriority (array) {
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
} */
