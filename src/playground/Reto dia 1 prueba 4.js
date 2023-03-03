// console.log();
console.log(getPetExerciseInfo("perro", 3));
console.log(getPetExerciseInfo("gato", 8));
console.log(getPetExerciseInfo("Mamut", 25));

function getPetExerciseInfo(type, age) {
    let respuesta;
    switch (type) {
        case "perro":
            switch (true) {
                case age<1:
                    respuesta = "Los cachorros necesitan pequeñas y frecuentes sesiones de juego";
                    break;
                case age>7:
                    respuesta = "Los perros viejos necesitan caminatas más cortas";
                    break;
                default:
                    respuesta = "Los perros a esta edad necesitan caminatas diarias y sesiones de juego";
                    break;
                }
            break;
        case "gato":
            switch (true) {
                case age<1:
                    respuesta = "Los gatitos necesitan frecuentes sesiones de juego";
                    break;
                case age>7:
                    respuesta = "Los gatos viejos necesitan sesiones de juego más cortas";
                    break;
                default:
                    respuesta = "Los gatos a esta edad necesitan jugar diariamente";
                    break;
                }
            break;
        case "ave":
            switch (true) {
                case age<1:
                    respuesta = "Las aves jóvenes necesitan mucho espacio para volar";
                    break;
                case age>7:
                    respuesta = "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar";
                    break;
                default:
                    respuesta = "te y un lugar para volar";
                    break;
                }
            break;
        default:
            respuesta = "Tipo de mascota inválida";
    }
    return respuesta;
}
