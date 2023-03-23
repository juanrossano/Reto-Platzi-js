// console.log();
console.log("Congela el objeto recursivamente");

var test = protectDog({
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["pollito", "croquetas"],
  activities: ["jugar", "caminar"],
});


test.name = "Toro";
console.log(test.name); // "Romeo"


test = protectDog({
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["pollito", "croquetas"],
  activities: ["jugar", "caminar"],
});

test.owner.name = "Pedro";
console.log(test.owner.name); // "Victor"

function protectDog(dog) {
    // Tu código aquí 👈
/*    Object.freeze(dog);
    const protectDog = Object.assign({},dog);
    Object.freeze(protectDog);
    return protectDog;*/
    const copia = Object.assign({}, dog);
    const propiedadesProtegidas = ["owner", "favoriteFood", "activities"];
  
    function herenciaRecursiva(objeto) {
      Object.freeze(objeto);
      for (const propiedad of Object.getOwnPropertyNames(objeto)) {
        if (propiedadesProtegidas.includes(propiedad) && typeof objeto[propiedad] === "object") {
          herenciaRecursiva(objeto[propiedad]);
        }
      }
    }
  
    herenciaRecursiva(copia);
    return copia;
  }

/**
 * Implementa la lógica para proteger un objeto de cambios.

En este desafío, debes implementar la lógica de la función llamada protectDog que reciba como parámetro los datos de un perro como objeto.

La función debe proteger el objeto y todos sus objetos anidados de ser modificados. Para lograr esto, debes utilizar el método Object.freeze para congelar el objeto y evitar cualquier cambio en sus propiedades. Además, se debe crear una copia del objeto original utilizando el método Object.assign y almacenarla en una variable. Por último, debe congelar el objeto copiado y devolverlo.

Ejemplo 1:
Input: protectDog({
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["pollito", "croquetas"],
  activities: ["jugar", "caminar"],
})

Output:
protectedDog.name = "Toro"
protectedDog.name // "Romeo"

Ejemplo 2:
Input: protectDog({
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["pollito", "croquetas"],
  activities: ["jugar", "caminar"],
})

Output:
protectedDog.owner.name = "Pedro"
protectedDog.owner.name // "Victor"
*/

function Solucion(dog) {
  const copy = Object.assign({}, dog);
  const propertiesToProtect = ["owner", "favoriteFood", "activities"];

  function freezeRecursively(obj) {
    Object.freeze(obj);
    for (const prop of Object.getOwnPropertyNames(obj)) {
      if (propertiesToProtect.includes(prop) && typeof obj[prop] === "object") {
        freezeRecursively(obj[prop]);
      }
    }
  }

  freezeRecursively(copy);
  return copy;

}