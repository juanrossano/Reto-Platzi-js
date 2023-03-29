// console.log();
console.log("Jerarquía de animales");


class Animal {
    // Tu código aquí 👈
    constructor(pname, nage, pspecie) {
      this.name = pname
      this.age = nage
      this.specie = pspecie
    }
    
    getInfo() {
      return {
        name: this.name,
        age: this.age,
        specie: this.specie
      }
    }
}
  
class Mammal extends Animal {
    // Tu código aquí 👈
    constructor(pname, nage, pspecie, phasFur) {
      super( pname,  nage, pspecie);
      this.hasFur = phasFur;
    }
    getInfo() {
      return {
        name: this.name,
        age: this.age,
        specie: this.specie,
        hasFur: this.hasFur
      }
    }
}
  class Dog extends Mammal {
    // Tu código aquí 👈
    constructor(pname, nage, pbreed, phasFur ) {
      super( pname,  nage, "dog", phasFur);
      this.breed = pbreed;
    }
    getInfo() {
      return {
        name: this.name,
        age: this.age,
        specie: this.specie,
        hasFur: this.hasFur,
        breed: this.breed
      }
    }
    bark() {return "woof!";}
}

const bird = new Animal("pepe", 1, "bird");
console.log(bird.getInfo());

const hippo = new Mammal("bartolo", 3, "hippo", false);
console.log(hippo.getInfo());

const dog = new Dog("fido", 4, "pastor aleman", true);
console.log(dog.bark());
 
/**
* En este desafío, debes crear una jerarquía de clases mediante el uso de la herencia.

La clase base será Animal con las propiedades name, age y species y un método getInfo que devuelve un objeto con la información del animal.

Luego, debes crear una clase Mammal que herede de Animal y tenga una propiedad adicional hasFur y un método getInfo que sobreescriba al del padre y incluya la información de hasFur.

Finalmente, debes crear una clase Dog que herede de Mammal y tenga una propiedad adicional breed y un método getInfo que sobreescriba al del padre y incluya la información de breed, al igual que el método bark que devuelva el string "woof!".

Ejemplo 1


Input:
const bird = new Animal("pepe", 1, "bird")
bird.getInfo()

Output:

{
  name: "pepe",
  age: 1,
  specie: "bird",
}

Ejemplo 2


Input:
const hippo = new Mammal("bartolo", 3, "hippo", false)
hippo.getInfo()

Output:

{
  name: "bartolo",
  age: 3,
  specie: "hippo",
  hasFur: false,
}

Ejemplo 3


Input:
const dog = new Dog("fido", 4, "pastor aleman", true);
dog.bark()

Output:
"woof!"
*/


/*
export class Animal {
  // Tu código aquí 👈
  constructor(pname, nage, pspecie) {
    this.name = pname
    this.age = nage
    this.specie = pspecie
  }

  getInfo() {
    return {
      name: this.name,
      age: this.age,
      specie: this.specie
    }
  }
}

export class Mammal extends Animal {
  // Tu código aquí 👈
  constructor(pname, nage, pspecie, phasFur) {
    super(pname, nage, pspecie);
    this.hasFur = phasFur;
  }
  getInfo() {
    return {
      name: this.name,
      age: this.age,
      specie: this.specie,
      hasFur: this.hasFur
    }
  }
}

export class Dog extends Mammal {
  // Tu código aquí 👈
  constructor(pname, nage, pbreed, phasFur) {
    super(pname, nage, "dog", phasFur);
    this.breed = pbreed;
  }
  getInfo() {
    return {
      name: this.name,
      age: this.age,
      specie: this.specie,
      hasFur: this.hasFur,
      breed: this.breed
    }
  }
  bark() { return "woof!"; }
}
*/

/*
*** Solucion
export class Animal {
  constructor(name, age, specie) {
    this.name = name;
    this.age = age;
    this.specie = specie;
  }

  getInfo() {
    return {
      name: this.name,
      age: this.age,
      specie: this.specie,
    };
  }
}

export class Mammal extends Animal {
  constructor(name, age, species, hasFur) {
    super(name, age, species, hasFur);
    this.hasFur = hasFur;
  }

  getInfo() {
    return {
      ...super.getInfo(),
      hasFur: this.hasFur,
    };
  }
}

export class Dog extends Mammal {
  constructor(name, age, breed, hasFur) {
    super(name, age, "dog", hasFur);
    this.breed = breed;
  }

  getInfo() {
    return {
      ...super.getInfo(),
      breed: this.breed,
    };
  }

  bark() {
    return `woof!`;
  }
}

*/