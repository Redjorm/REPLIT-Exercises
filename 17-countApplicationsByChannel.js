/* 
Cuenta las aplicaciones por canal
En Academlo estamos interesados en saber mediante que canal nos conocen nuestros estudiantes, por ejemplo, pueden conocernos por facebook, youtube, twitter, etc. Sabiendo eso, resuelve el siguiente ejercicio.
La función countApplicationsBychannel() recibe como parámetro un arreglo de usuarios
El arreglo es una lista de usuarios con una estructura como la siguiente

[
  { name: 'Andrea', email: 'andrea@gmail.com', channel: 'youtube', application: null },
  { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } },
  { name: 'Alondra', email: 'alondra@gmail.com', channel: 'twitter', application: { country: 'Colombia', state: 'Bogotá' } },
  { name: 'Luis', email: 'luisa@gmail.com', channel: 'twitter', application: { country: 'México', state: 'Nuevo León' } }
  ];
Tu labor es contar cuántas aplicaciones hay por cada canal, para esto debes apoyarte en la propiedad channel.

Algo muy importante es que solo tomaremos en cuenta a los usuarios que hayan enviado su aplicación, si no tienen aplicación no es de nuestro interés saber mediante que canal nos conocieron.

Ejemplo:
Si la función recibe el arreglo anterior devolveríamos un objeto como el siguiente, ya que 2 aplicaciones provienen de twittter y una de youtube (No contamos a Andrea porque no ha enviado su aplicación):
      { youtube: 1, twitter: 2 }
*Recuerda utilizar return para devolver tu solución.
*El arreglo que recibe la función puede tener n cantidad de usuarios. *Pueden existir n cantidad de canales. */

const users = [
  {
    name: 'Andrea',
    email: 'andrea@gmail.com',
    channel: 'youtube',
    application: null
  },
  {
    name: 'Daniela',
    email: 'daniela@gmail.com',
    channel: 'youtube',
    application: { country: 'Colombia', state: 'Bogotá' }
  },
  {
    name: 'Alondra',
    email: 'alondra@gmail.com',
    channel: 'twitter',
    application: { country: 'Colombia', state: 'Bogotá' }
  },
  {
    name: 'Luis',
    email: 'luisa@gmail.com',
    channel: 'twitter',
    application: { country: 'México', state: 'Nuevo León' }
  }
]

function countApplicationsByChannel (students) {
  let channel = {}
  for (const i in students) {
    if (students[i].application) {
        if (channel[students[i].channel]) {
            channel[students[i].channel] = channel[students[i].channel] + 1
        }else{
            channel[students[i].channel] = 1
        }
    }
  }
  return channel
}

console.log(countApplicationsByChannel(users))


/* if (channel[students[i].channel]) {
    channel[students[i].channel] = channel[students[i].channel] + 1
  } else {
    channel[students[i].channel] = 1
  } */
