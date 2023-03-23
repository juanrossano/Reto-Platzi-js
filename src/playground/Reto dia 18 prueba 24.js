// console.log();
console.log("Crea un sistema de carrito de compras");


// exercise.js
import { Product } from "./product";

export class Article extends Product {
  // Tu código aquí 👈
  addToCart() {;
    return `Agregando ${this.quantity} unidades del artículo ${this.name} al carrito`;
  }
}

export class Service extends Product {
  // Tu código aquí 👈
  addToCart() {

    return `Agregando el servicio ${this.name} al carrito`;
  }
}

export class Cart {
  // Tu código aquí 👈
  productos = [];

  addProduct(product) {
    this.productos.push(product);
  }
  deleteProduct(product) {
    let indice = this.productos.findIndex(item => item.name === product.name)
    this.productos.splice(indice, 1);
  }
  calculateTotal() {
    return this.productos.reduce((acumulador, numero) => (acumulador + (numero.price * numero.quantity)), 0);
  }
  getProducts() {
    return this.productos;
  }
}

//product.js
class Product {
    // No debes editar este archivo ❌
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    addToCart() {
      throw new Error(
        "La lógica de este método debe ser implementada por las clases hijas"
      );
    }
  }
  
/**
 * En este desafío debes crear un sistema de carrito de compras.

Dentro del playground tendrás un archivo product.js que será la clase base y será abstracta. Deberás crear las clases hijas Article y Service que extenderán de Product.

La clase Article deberá implementar el método addToCart() de manera que retorne el string "Agregando x unidades del artículo x al carrito", donde x es el nombre y la cantidad del producto. Por otro lado, la clase Service deberá implementar el método addToCart() de manera que retorne el string "Agregando el servicio x al carrito", donde x es el nombre del servicio.

Además, debes crear la clase Cart que será el carrito de compras y tendrá los siguientes métodos:

addProduct(product) este método agregará un producto al final de la lista de compras y deberá llamar al método addToCart() de cada producto o servicio.
deleteProduct(product) este método recibirá un producto y lo eliminará de la lista de productos
calculateTotal() este método calculará el total de los productos agregados y lo devolverá.
Ejemplo 1


Input:

const book = new Article("Libro", 100, 2);
const course = new Service("Curso", 120, 1);

const cart = new Cart();
cart.addProduct(book);
cart.addProduct(course);
cart.calculateTotal();


Output:

Agregando 2 unidades del artículo Libro al carrito
Agregando el servicio Curso al carrito
320

Ejemplo 2


Input:

const book = new Article("Libro", 100, 2);
const course = new Service("Curso", 120, 1);

const cart = new Cart();
cart.addProduct(book);
cart.addProduct(course);
cart.deleteProduct(book);
cart.calculateTotal();


Output:

Agregando 2 unidades del artículo Libro al carrito
Agregando el servicio Curso al carrito
120
*/


/**
* Solucion
import { Product } from "./product";

export class Article extends Product {
  addToCart() {
    return `Agregando ${this.quantity} unidades del articulo ${this.name} al carrito`;
  }
}

export class Service extends Product {
  addToCart() {
    return `Agregando el servicio ${this.name} al carrito`;
  }
}

export class Cart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    product.addToCart();
    this.products.push(product);
  }

  deleteProduct(product) {
    this.products = this.products.filter((item) => item.name !== product.name);
  }

  calculateTotal() {
    const total = this.products.reduce(
      (sum, currentItem) => currentItem.price * currentItem.quantity + sum,
      0
    );
    return total;
  }
  
  getProducts(){
    return this.products
  }
}


*/