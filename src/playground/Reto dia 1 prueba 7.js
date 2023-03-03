// console.log();
console.log("Obtén el promedio de los estudiantes\n");
console.log(getStudentAverage([
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
]))

function getStudentAverage(students) {
  let Clase = {
    classAverage: 0,
    students: []
  }
  let total = 0;
  let cantidad = 0;

  students.forEach(elemento => {
    [elemento.name, elemento.grades.reduce(function(acumulador, grades) {
      return acumulador + grades;
    }, 0)]
  });

  students.forEach(element => {
    total=0;
    cantidad=0;
    element.grades.forEach(nota => {
      total += nota;
      cantidad++;
    })
    Clase.students.push({name: element.name, average: Number((total / cantidad).toFixed(2)) })
  });

  total=0;
  cantidad=0;
  Clase.students.forEach( item => {
    total += item.average;
    cantidad++;
  })
  Clase.classAverage = Number((total / cantidad).toFixed(2));

  return Clase;
}


/**
 * Input: getStudentAverage([
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
])

Output: {
  classAverage: 88.17,
  students: [
    {
      name: "Pedro",
      average: 88.75
    },
    {
      name: "Jose",
      average: 88.5
    },
    {
      name: "Maria",
      average: 87.25
    }
  ]
}
 */