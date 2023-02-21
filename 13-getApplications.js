const users = [
  {
    name: 'Erik',
    email: 'erik@academlo.com',
    channel: 'youtube',
    application: null
  },
  {
    name: 'Georg',
    email: 'georg@gmail.com',
    channel: 'facebook',
    application: { country: 'Mexico', state: 'Nuevo León' }
  },
  {
    name: 'Daniela',
    email: 'daniela@gmail.com',
    channel: 'youtube',
    application: { country: 'Colombia', state: 'Bogotá' }
  }
]

function getApplications (users) {
  const userApplications = []
  for (const i in users) {
    if (users[i].application) {
        userApplications.push(users[i]);
    }
  }
  return userApplications
}

console.log(getApplications(users))
