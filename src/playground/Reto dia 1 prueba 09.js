// console.log();
console.log("Calculadora con closures\n");
const calculator = createCalculator()
console.log(calculator.add(10));

function createCalculator() {
  let total =0;
  return {
      add:a=>total=a+total,
      subtract:a=>total=Math.abs(a-total),
      multiply:a=>total=a*total,
      divide:a=>total=total/a,
      clear:a=>total=0,
      getTotal:a=>total,
  }

  // Tu código aquí 👈
}


/**
 * Ejemplo 1:

Input:
const calculator = createCalculator()
calculator.add(10)

Output: 10

Ejemplo 2:

const calculator = createCalculator()
calculator.add(10)
calculator.subtract(-10)

Output: 20

Ejemplo 3:

const calculator = createCalculator()
calculator.add(10)
calculator.subtract(-10)
calculator.clear()

Output: 0
 * 
 * En este desafío tendrás que crear una calculadora mediante el uso de closures.

La calculadora debe contar con los siguientes métodos:

add: recibe un número, lo suma al total y devuelve el resultado
subtract: recibe un número, lo resta al total y devuelve el resultado
multiply: recibe un número, lo multiplica al total y devuelve el resultado
divide: recibe un número, lo divide al total y devuelve el resultado
clear: reinicia el total a 0 y devuelve el resultado
getTotal: devuelve el total actual.
 */
