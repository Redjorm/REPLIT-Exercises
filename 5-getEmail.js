/* Instrucciones
Obtén el correo de un usuario

La función getEmail() recibe como parámetro un objeto con las propiedades email y age, tu labor es obtener el correo y retornarlo utilizando return.

Ejemplo: Si el objeto que recibe es
{ name: "Erik", email: "erik@academlo.com" }
deberás utilizar return para devolver "erik@academlo.com". */

user = { name: 'Erik', email: 'erik@academlo.com' }

function getEmail (user) {
  return user.email
}

console.log(getEmail(user))



