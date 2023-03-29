// console.log();
console.log("Mejora el código usando builder pattern");


class CarBuilder {
    // Tu código aquí 👇
    constructor() {
      this.year = 0;
      this.model = "";
      this.brand = "";
      this.color = "";
      this.price = 0;
      this.isAvailable = false;
    }

    setYear(Year) {
      this.year = Year;
      return this;
    }
    setModel(Model) {
      this.model = Model;
      return this;
    }
    setBrand(Brand) {
      this.brand = Brand;
      return this;
    }
    setColor(Color) {
      this.color = Color;
      return this;
    }
    setPrice(Price) {
      this.price = Price;
      return this;
    }
    setIsAvailable(Available) {
      this.isAvailable = Available;
      return this;
    }
    build() {
      return {
        year: this.year,
        model: this.model,
        brand: this.brand,
        color: this.color,
        price: this.price,
        isAvailable: this.isAvailable
        }
    }
}

/* Test */
const car = new CarBuilder()
  .setYear(2021)
  .setModel("Model X")
  .setBrand("Tesla")
  .setColor("Red")
  .setPrice(50000)
  .setIsAvailable(false)
  .build()
console.log(car);

/**
 * En este desafío, te proponemos utilizar el patrón builder para construir un objeto "auto".

Actualmente, la construcción de un auto en el código es confusa y difícil de leer.

const car = new CarBuilder(2021, "Model X", "Tesla", "Red", 5000, false);

Tu tarea será implementar el patrón builder para lograr una construcción más clara y legible.

Ejemplo:


Input:

const car = new CarBuilder()
  .setYear(2021)
  .setModel("Model X")
  .setBrand("Tesla")
  .setColor("Red")
  .setPrice(50000)
  .setIsAvailable(false)
  .build()

Output: {
  year: 2021,
  model: "Model x",
  brand: "Tesla",
  color: "Red",
  price: 50000,
  isAvailable": false
}
*/