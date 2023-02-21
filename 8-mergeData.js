/* Instrucciones
Mezclando datos de 2 arreglos

La función mergeData() recibe como parámetros 2 arreglos:
El primer arreglo es una lista de usuarios con una estructura como la siguiente


[
  { name: 'Georg', email: 'georg@academlo.com' },
  { name: 'Andrea', email: 'andrea@gmail.com' }
]
El segundo arreglo es una lista de asistencias con una estructura como la siguiente, donde attendance nos indica si el usuario asistió o no a sus clases de programación


[
  { email: 'georg@academlo.com', attendance: true },
  { email: 'andrea@gmail.com', attendance: false }
]
Tu labor es hacer una mezcla de los datos de ambos arreglos y devolver uno solo que contenga toda la información (sin datos duplicados).

Ejemplo:
En el caso de haber recibido los 2 arreglos mencionados anterior mente deberas retornar el siguiente arreglo:

  

[
    { name: 'Georg', email: 'georg@academlo.com', attendance: true },
    { name: 'Andrea', email: 'andrea@gmail.com', attendance: false }
]

*Recuerda utilizar return para devolver tu solución.
*El primer arreglo que recibe la función puede tener n cantidad de usuarios.
*El segundo arreglo que recibe la función puede tener n cantidad de asistencias. */

users = [
  { name: 'Georg', email: 'georg@academlo.com' },
  { name: 'Andrea', email: 'andrea@gmail.com' }
]

asistencias = [
  { email: 'georg@academlo.com', attendance: true },
  { email: 'andrea@gmail.com', attendance: false }
]

function mergeData (users, attendances) {
  for (const i in users) {
    for (let j = 0; j < attendances.length; j++) {
      if (users[i].email == attendances[j].email) {
        users[i].attendance = attendances[j].attendance
      }
    }
  }
  return users
}

console.log(mergeData(users, asistencias))
