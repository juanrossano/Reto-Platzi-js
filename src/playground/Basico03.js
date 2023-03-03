console.log(solution('computadora'));
console.log(solution('celular'));
console.log(solution('cable'));
console.log(solution('ornitorrinco'));


function solution(article) {
    let mensaje;
    switch(article) {
        case 'computadora':
            mensaje = "Con mi computadora puedo programar usando JavaScript";
            break;
        case 'celular':
            mensaje = "En mi celular puedo aprender usando la app de Platzi";
            break;
            break;
        case 'cable':
            mensaje = "¡Hay un cable en mi bota!";
            break;
        default:
            mensaje = "Artículo no encontrado";

    }
    return mensaje;
}





/**
Si recibes una "computadora", debes retornar el mensaje "Con mi computadora puedo programar usando JavaScript".
Si recibes un "celular", debes retornar el mensaje "En mi celular puedo aprender usando la app de Platzi".
Si recibes un "cable", debes retornar el mensaje "¡Hay un cable en mi bota!".
Y si no recibes ninguno de estos valores, debes retornar el mensaje "Artículo no encontrado".
 */