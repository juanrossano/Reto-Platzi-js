// console.log();
console.log("Evita el callback hell haciendo uso de Promises");


export function runCode() {
  const strings = [];

  return doTask1()
    .then(res => {
      strings.push(res)
      return doTask2();
    })
    .then(res => {
      strings.push(res)
      return doTask3();
    })
    .then(res => {
      strings.push(res)
      return strings
    })
    .catch(error => {
      console.log(error)
    });
}



export function doTask1(callback) {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve('Task 1'), 300);
  })
}

export function doTask2(callback) {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve('Task 2'), 300);
  })
}

export function doTask3(callback) {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve('Task 3'), 300);
  })
}

/** 
 * Funcion exercise.js
import { doTask1, doTask2, doTask3 } from './tasks';

export function runCode() {
  const strings = [];
  return new Promise((resolve) => {
    doTask1((rta1) => {
      strings.push(rta1);
      doTask2((rta2) => {
        strings.push(rta2);
        doTask3((rta3) => {
          strings.push(rta3);
          resolve(strings);
        })
      })
    })
  })
}
*/

/** 
 * funcion tasks.js
export function doTask1(callback) {
  window.setTimeout(() => callback('Task 1'), 300);
}

export function doTask2(callback) {
  window.setTimeout(() => callback('Task 2'), 300);
}

export function doTask3(callback) {
  window.setTimeout(() => callback('Task 3'), 300);
}
*/

/**
En este desafío tienes un código base el cual se aplica una mala práctica de programación que conocemos como el callback hell y tu reto es evitarlo usando promesas.

Nota: No uses async/await, ya que este reto se trata de resolverlo mediante promesas con la función then.

Para solucionarlo vas a encontrar una función llamada runCode que no recibe parámetros de entrada que tiene el código base que tienes que refactorizar, además el archivo tasks.js con las funciones que tienes que ejecutar.

Dentro del cuerpo de la función runCode debes escribir tu solución y además pasar y deberías pasar las funciones del archivo tasks.js a promesas.

Ejemplo:

Input:
runCode()
.then(response => console.log(response));

Output:
["Task 1", "Task 2", "Task 3"]
 */