const users = [
  {
    name: 'Erik',
    gender: 'male',
    age: 22
  },
  {
    name: 'Daniela',
    gender: 'female',
    age: 22
  },
  {
    name: 'Gustavo',
    gender: 'male',
    age: 49
  },
  {
    name: 'María',
    gender: 'female',
    age: 35
  }
]

const user = 'Gustavo'

function findUser (users, name) {
  for (const i in users) {
    if (users[i].name === name) {
      return users[i]
    }
  }
}

console.log(findUser(users, user))
