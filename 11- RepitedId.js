const users = [
  { name: 'Daniela', age: 25 },
  { name: 'Andrea', age: 23 },
  { name: 'José', age: 27 },
  { name: 'José', age: 27 },
  { name: 'José', age: 27 },
  { name: 'Georg', age: 23 }
]

function findMostCommonAge (students) {
  let ages = students.map(student => student.age)
  let resultado = ages
    .sort(
      (age1, age2) =>
        ages.filter(valor => valor == age1).length -
        ages.filter(valor => valor == age2).length
    )
    
  return resultado
}

console.log(findMostCommonAge(users))
