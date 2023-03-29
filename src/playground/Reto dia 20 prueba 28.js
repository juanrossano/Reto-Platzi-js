// console.log();
console.log("Agenda de vuelos");

class Flight {
  constructor(origin, destination, date, capacity, price) {
    // Tu código aquí 👈
    this.origin = origin // (origen), 
    this.destination = destination // (destino), 
    this.date = date // (fecha de salida), 
    this.capacity = capacity // (capacidad máxima), 
    this.price = price // (precio) e inicilizará una variable llamada 
    this.passengers = [] // array de pasajeros
  }

  sellTicket(passenger) {
    // Tu código aquí 👈
    if (this.capacity > 0) {
      const vuelo = new Reservation(this, passenger);
      this.passengers.push({fullName: passenger.name + " " + passenger.lastName, age: passenger.age});
      passenger.addFlight(this.origin, this.destination, this.date, this.price)
      this.capacity--;
      return vuelo;
    }
  }
}

class Passenger {
  // Tu código aquí 👈
  constructor(name, lastName, age) {
    this.name = name; // nombre, 
    this.lastName = lastName; // apellido 
    this.age = age; // edad
    this.flights = [] // lista de vuelos
  }

  addFlight(origin, destination, date, price) {
    this.flights.push({
      origin: origin, 
      destination: destination, 
      date: date, 
      price: price}) 
  }
}
class Reservation {
  constructor(flight, passenger) {
    // Tu código aquí 👈
    this.flight = flight;
    this.passenger = passenger;
//    passenger.addFlight(flight.origin, flight.destination, flight.date, flight.price)
  }

  reservationDetails() {
    // Tu código aquí 👈
    return {origin: this.flight.origin, 
            destination: this.flight.destination, 
            date: this.flight.date, 
            reservedBy: this.passenger.name + " " + this.passenger.lastName};
  }
}

class PremiumFlight extends Flight {
  constructor(origin, destination, date, capacity, price, specialService) {
    // Tu código aquí 👈
    super(origin, destination, date, capacity, price + specialService);
    this.specialService = specialService;
  }

  sellTicket(passenger) {
    // Tu código aquí 👈
    const especifico = super.sellTicket(passenger)
    especifico.price += this.specialService;
    return especifico;
  }
}

class EconomicFlight extends Flight {
  constructor(origin, destination, date, capacity, price) {
    // Tu código aquí 👈
    super(origin, destination, date, capacity, price);
  }

  sellTicket(passenger) {
    // Tu código aquí 👇
    let especifico = super.sellTicket(passenger)
    if (passenger.age < 18 || passenger.age > 65) {
      this.price *= 0.8;
      especifico.price *= .8;
    }
    return especifico;
  }
}

/** Test */
const flight1 = new Flight("CDMX", "Guadalajara", "2022-01-01", 5, 1000);

const passenger1 = new Passenger("Juan", "Perez", 30);

const reservation1 = flight1.sellTicket(passenger1);

console.log(passenger1.flights)

const flight2 = new Flight("CDMX", "Guadalajara", "2022-01-01", 5, 1000);
const passenger2 = new Passenger("Juan", "Perez", 30);

const reservation2 = flight2.sellTicket(passenger2);

console.log(flight2.passengers)


const flight3 = new EconomicFlight(
  "New York",
  "Paris",
  "2023-12-25",
  100,
  200
);

const passenger3 = new Passenger("Pedro", "Gutierrez", 17);

const reservation3 = flight3.sellTicket(passenger3);

console.log(reservation3.flight.price)

/*
import { Flight } from "./Flight";
import { Reservation } from "./Reservation";

export class EconomicFlight extends Flight {
  sellTicket(passenger) {
    // Tu código aquí 👇
  }
}
*/


/**
* En este desafío crearas un Sistema de reservaciones de vuelos.

Tendrás que implementar la lógica de las siguientes clases con las siguientes características (cada clase tiene su propio archivo dentro del coding playground)

Flight: permite crear vuelos regulares con los atributos origin (origen), destination (destino), date (fecha de salida), capacity (capacidad máxima), price (precio) e inicilizará una variable llamada passengers la cual será el array donde almacenaremos a los pasajeros. Además, incluirá el método sellTicket(passenger) para vender un boleto a un pasajero específico siempre y cuando la capacidad sea mayor a cero. Este método agregará al pasajero a la lista de pasajeros del avión y a su vez agregará el vuelo a la lista de vuelos del pasajero. La función devolverá un objeto reservation.

Passenger: cada pasajero tendrá los atributos name (nombre), lastName (apellido) y age (edad) y se inicializará con una lista de vuelos (flights) vacía. Cada que se agregue un vuelo a dicha lista, solo deberán agregarse las siguientes propiedades: origin, destination, date y price.

Reservation aceptará un objeto flight y un objeto passenger, e incluirá el método reservationDetails() que devolverá un objeto con los detalles de la reservación, incluyendo origin, destination, date y reservedBy (nombre completo del pasajero).

PremiumFlight extenderá de la clase Flight y agregará la propiedad specialService que será un costo adicional al precio del vuelo dentro del método sellTicket(passenger).

EconomicFlightde igual manera, extenderá de la clase Flight y aplicará un descuento del 20% dentro del método sellTicket(passenger) para los pasajeros con una edad menor a 18 años o mayor a 65 años.

Ejemplo 1


Input:
const flight = new Flight("CDMX", "Guadalajara", "2022-01-01", 5, 1000);

const passenger = new Passenger("Juan", "Perez", 30);

const reservation = flight.sellTicket(passenger);

console.log(passenger.flights)

Output:
[
  {
    origin: "CDMX",
    destination: "Guadalajara",
    date: "2022-01-01",
    price: 1000,
  },
]

Ejemplo 2:

Input:
const flight = new Flight("CDMX", "Guadalajara", "2022-01-01", 5, 1000);
const passenger = new Passenger("Juan", "Perez", 30);

const reservation = flight.sellTicket(passenger);

console.log(flight.passengers)

Output:

[
  {
    fullName: "Juan Perez",
    age: 30,
  },
]

Ejemplo 3:

Input:
const flight = new EconomicFlight(
  "New York",
  "Paris",
  "2023-12-25",
  100,
  200
);

const passenger = new Passenger("Pedro", "Gutierrez", 17);

const reservation = flight.sellTicket(passenger);

console.log(reservation.flight.price)

Output: 160
*/


/*
*** => Solucion

class Flight {
  constructor(origin, destination, date, capacity, price) {
    this.origin = origin;
    this.destination = destination;
    this.date = date;
    this.capacity = capacity;
    this.price = price;
    this.passengers = [];
  }

  sellTicket(passenger) {
    if (this.capacity > 0) {
      this.capacity -= 1;
      const reservation = new Reservation(this, passenger);

      this.passengers.push(reservation.confidentialData);
      passenger.addFlight(this);

      return reservation;
    }
  }
}

class Passenger {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.flights = [];
  }

  addFlight(flight) {
    this.flights.push({
      origin: flight.origin,
      destination: flight.destination,
      date: flight.date,
      price: flight.price,
    });
  }
}

class Reservation {
  constructor(flight, passenger) {
    this.flight = flight;
    this.passenger = passenger;
  }

  get confidentialData() {
    return (() => {
      const fullName = `${this.passenger.name} ${this.passenger.lastName}`;
      const age = this.passenger.age;

      return {
        fullName,
        age,
      };
    })();
  }

  reservationDetails() {
    const flight = this.flight;
    const passenger = this.confidentialData;

    return {
      origin: flight.origin,
      destination: flight.destination,
      date: flight.date,
      reservedBy: passenger.fullName,
    };
  }
}

class PremiumFlight extends Flight {
  constructor(origin, destination, date, capacity, price, specialService) {
    super(origin, destination, date, capacity, price);
    this.specialService = specialService;
  }

  sellTicket(passenger) {
    if (this.capacity > 0) {
      this.capacity -= 1;
      const reservation = new Reservation(this, passenger);

      this.passengers.push(reservation.confidentialData);
      passenger.addFlight(this);
      this.price += this.specialService;

      return reservation;
    }
  }
}

class EconomicFlight extends Flight {
  sellTicket(passenger) {
    if (this.capacity > 0) {
      this.capacity -= 1;
      const reservation = new Reservation(this, passenger);

      this.passengers.push(reservation.confidentialData);
      passenger.addFlight(this);

      if (passenger.age < 18 || passenger.age > 65) {
        this.price *= 0.8;
      }

      return reservation;
    }
  }
}


*/

/*
Should add a flight to passenger

expect(received).toEqual(expected) // deep equality

- Expected - 0
+ Received + 6

Array [
Object {
"date": "2022-01-01",
"destination": "Guadalajara",
"origin": "CDMX",
"price": 1000,
},
+ Object {
+ "date": "2022-01-01",
+ "destination": "Guadalajara",
+ "origin": "CDMX",
+ "price": 1000,
+ },
]
*/