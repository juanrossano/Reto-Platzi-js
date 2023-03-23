// console.log();
console.log("Crea una promesa para mandar emails");
sendEmail(
    "test@mail.com",
    "Nuevo reto",
    "Únete a los 30 días de JS"
  )
  .then(result => console.log(result))
  

function sendEmail(email, subject, body) {
    // Tu código aquí 👈
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
          if (email != "" && subject != "" && body != "") {
            resolve({ email: email, subject: subject, body: body });
          } else {
            reject(new Error("Error: Hacen falta campos para enviar el email"));
          }
        }, 2000)
      })
    }

/**
En este desafío debes utilizar promesas para enviar un correo electrónico.

La función sendEmail recibe tres parámetros: email, subject y body, los cuales son necesarios para enviar un correo. Deberás implementar la lógica necesaria para usar promesas y enviar el correo después de 2 segundos.

En caso de faltar algún dato, deberás lanzar un error con el mensaje indicando que faltan campos para enviar el correo. Recuerda utilizar la siguiente sintaxis:

reject(new Error(message));

También recuerda que para usar setInterval o setTimeout debes usar el namespace de window de la siguiente manera para que las pruebas pasen correctamente.

window.setTimeout(() => {
  // Código aquí
}, 1000);

Ejemplo 1:

Input:

sendEmail(
  "test@mail.com",
  "Nuevo reto",
  "Únete a los 30 días de JS"
)
.then(result => console.log(result))


Output:

// Después de 2 segundos

{
  email: "test@mail.com"
  subject: "Nuevo reto",
  body:  "Únete a los 30 días de JS",
}

Ejemplo 2:

Input:

sendEmail(
  "test@mail.com",
  "",
  "Únete a los 30 días de JS"
)
.then(result => console.log(result))
.catch(error => console.log(error))

Output:

// Después de 2 segundos

"Error: Hacen falta campos para enviar el email" 
*/

function Solucion(email, subject, body) {
const requiredFields = ["name", "lastname", "email", "password"];

if (!requiredFields.every((field) => formData[field])) {
  throw new Error(
    `Faltan los siguientes campos requeridos: ${requiredFields
      .filter((field) => !formData[field])
      .join(", ")}`
  );
}

const existUser = registeredUsers.find(
  (user) => user.email === formData.email
);

if (existUser) {
  throw new Error(`El usuario con el email ${formData.email} ya existe`);
}

registeredUsers.push({
  name: formData.name,
  lastname: formData.lastname,
  email: formData.email,
});

return `Tu registro fue exitoso ${formData.name} ${formData.lastname}`;

}