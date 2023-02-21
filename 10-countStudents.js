students = [
  { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
  { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
  { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
  { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
]

countries = [
  { id: 1, name: 'Mexico' },
  { id: 2, name: 'Colombia' }
]

function countStudents (students, countries, countryName) {
  let totalStudents = 0
  for (const i in students) {
    for (let j = 0; j < countries.length; j++) {
      if (students[i].country_id == countries[j].id) {
        students[i].country = countries[j].name
      }
    }
  }

  for (const i in students) {
    if (students[i].country == countryName) {
      totalStudents++
    }
  }

  return totalStudents
}

console.log(countStudents(students, countries, 'Colombia'))
