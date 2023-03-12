// console.log();
console.log("Encuentra la ubicación del valor buscado");

const array1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const value1 = 5

console.log(searchValue(array1, value1));

const array2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const value2 = 45;

console.log(searchValue(array2, value2));

function searchValue(array, value) {
    // Tu código aquí 👈
    let row = -1;
    let column = -1;
  
    console.log(value);
  
    for (var x = 0; x < array.length; x++) {
      for (var y = 0; y < array[x].length; y++) {
        if (array[x][y] == value) {
          row = x;
          column = y;
          return { row: x, column: y };
        }
      }
    }
    throw new Error("Valor no encontrado");
}

/**
En este desafío, tu objetivo es encontrar un valor específico en un array de dos dimensiones.

La función searchValue recibirá dos parámetros: un array bidimensional y un valor a buscar. Tu tarea será implementar la lógica necesaria para encontrar el valor y retornar un objeto con las propiedades row y column que indicarán la posición del valor dentro del array bidimensional.

Si el valor no se encuentra en la matriz, la función deberá lanzar un error con el mensaje "Valor no encontrado". Recuerda que la sintaxis para lanzar errores es la siguiente

throw new Error("Valor no encontrado");

Ejemplo 1:


Input:

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const value = 5

searchValue(array, value)

Output:

{
  row: 1,
  column: 1,
}

Ejemplo 2:


Input:

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const value = 45;

Output: "Valor no encontrado"
 */