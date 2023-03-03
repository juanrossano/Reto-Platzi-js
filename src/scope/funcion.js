function saludo() {
    let userName = 'Ana'; 
    console.log(userName);
  
    if (userName === 'Ana') {
      console.log(`Hello ${userName}!`)
    }
  
  }
  
  saludo();
  console.log(userName); // da error porque la variable esta declarada dentro de la funcion y no se accede desde fuera
  
