// console.log();
console.log("Encapsula los datos de los usuarios");




class User {
    // Tu código aquí 👈
    constructor(name, age) {
        this._name = name;
        this._age = age;
        this._friends = [];
        this._messages = [];
    }

    addFriend(friend) {
        this._friends.push(friend);
    }
    sendMessage(message, friend) {
        this._messages.push(message);
        friend._messages.push(message);
    }
    showMessages() {
        return this._messages;
    }

    /**
     * @param {String} name
     */
    set name( name) { this._name = name}

    /**
     * @param {Number} age
     */
    set age( age) { this._age = age}

    get name() {return this._name;}

    get age() {return this._age;}
}
 

const usuario1 = new User("Juan", 20);
const usuario2 = new User("Maria", 25);
usuario1.addFriend(usuario2);
usuario1.sendMessage("Hola Maria!", usuario2);

console.log(usuario1.showMessages());

/**
 * En este desafío, debes crear una clase "Usuario" que represente un usuario en una red social y utilizar encapsulamiento para proteger sus datos privados.

La clase debe tener los siguientes atributos privados:

nombre
edad
amigos (array de objetos Usuario)
mensajes (array de strings)
Además, debes proporcionar los siguientes métodos públicos:

agregarAmigo(amigo): agrega un usuario a la lista de amigos del usuario actual.
enviarMensaje(mensaje, amigo): agrega un mensaje a la lista de mensajes del usuario actual y al amigo especificado.
verMensajes(): devuelve la lista de mensajes del usuario actual.
También debes tener definidos los getters y setters para acceder a los datos privados como el nombre y la edad, los cuales pueden ser modificados mediante su propio setter.

Ejemplo 1:


Input:

const usuario1 = new Usuario("Juan", 20);
const usuario2 = new Usuario("Maria", 25);
usuario1.addFriend(usuario2);
usuario1.sendMessage("Hola Maria!", usuario2);

usuario1.showMessages()

Output:

["Hola Maria!"]

Ejemplo 2:


Input:

const usuario1 = new Usuario("Juan", 20);
usuario1.name = "Pepito"
usuario1.name

Output:

"Pepi
*/

export class Solucion {
    constructor(name, age) {
      this._name = name;
      this._age = age;
      this._friends = [];
      this._messages = [];
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      this._name = newName;
    }
  
    get age() {
      return this._age;
    }
  
    set age(newAge) {
      this._age = newAge;
    }
  
    addFriend(user) {
      this._friends.push(user);
    }
  
    sendMessage(message, friend) {
      this._messages.push(message);
      friend._messages.push(message);
    }
  
    showMessages() {
      return this._messages;
    }
  }
  