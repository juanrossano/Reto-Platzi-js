// console.log();
console.log(findFamousCats([
    {
      name: "Luna",
      followers: [500, 200, 300]
    },
    {
      name: "Michi",
      followers: [100, 300]
    },
  ]));
console.log(findFamousCats([
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
  ]));

function findFamousCats(cats) {
    let seguidores = cats.map(cat => [cat.name, cat.followers.reduce(function(acumulador, followers) {
        return acumulador + followers;
      }, 0)]);
      let popular = [];
      let maximo = 0;
      
      seguidores.forEach(element => {
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
      return popular;
}
