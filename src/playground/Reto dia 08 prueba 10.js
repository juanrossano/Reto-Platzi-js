// console.log();
console.log("Crea tu propio método map");
console.log(myMap([1,2,3,4], (num) => num * 2));
console.log(myMap([
    {name: "michi", age: 2},
    {name: "firulais", age: 6}],
    (pet) => pet.name));


function myMap(array, func) {
    let Coleccion = [];
    array.forEach( elemento => 
        Coleccion.push(func(elemento)));
    return Coleccion
    // Tu código aquí 👈
}


/**
En este desafío debes desarrollar una implementación personalizada del método map utilizando funciones de orden superior.

Recibirás como parámetros un array y una función (func). El array contendrá un conjunto de elementos (números, objetos, strings, etc.) y la función se utilizará para aplicar una acción sobre cada elemento del array. Tu objetivo es devolver un nuevo array con los resultados de la función tal y como lo haría el método map.

Ejemplo 1:

Input: myMap([1,2,3,4], (num) => num * 2)

Output: [2,4,6,8]

Ejemplo 2:

Input: myMap([
  {name: "michi", age: 2},
  {name: "firulais", age: 6}],
  (pet) => pet.name)

Output: ["michi", "firulais"]
 */