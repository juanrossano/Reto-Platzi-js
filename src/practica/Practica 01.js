const array = [['🐸','🐱'],'🐹', ['🐯']]; 
const rta1 = array.flat();

console.log(rta1)

const examen2 = [1,1,1,1,1];
const rta2 = examen2.reduce((total,item) => total+item, 0)
console.log(rta2)

const array3 = ['a', 'bb', 'ccc']; 
const rta3 = array3.map(item => item.length);
console.log(rta3)

matriz = [
    {
      name: "Mimi",
      followers: [320, 120, 70]
    },
    {
      name: "Milo",
      followers: [400, 300, 100, 200]
    },
    {
      name: "Gizmo",
      followers: [250, 750]
    }
  ];


lista = matriz.map(elemento => [elemento.name, elemento.followers.reduce(function(acumulador, followers) {
    return acumulador + followers;
  }, 0)]);

console.log(lista);

let popular = [];
let maximo = 0;

lista.forEach(element => {
    switch (true) {
        case element[1] > maximo:
            maximo = element[1];
            popular = [];
            popular.push(element[0]);
            break;
        case element[1] == maximo:
            popular.push(element[0]);
            break;
        }
});

console.log(popular);


const arr = [1, 2, 3, 4, 5]; 

const result = arr.map(num => num * 2).filter(num => num > 5); 

console.log(result);