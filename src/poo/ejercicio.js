class Estudiante {
    constructor(nombre, curso) {
        this.nombre = nombre;
        this.curso = curso;
    }

     Detalle() {
        return this["nombre"];
    }
}