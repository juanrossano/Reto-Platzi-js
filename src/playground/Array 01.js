// console.log();
console.log(multiplyElements([2, 4, 5, 6, 8]));
console.log(multiplyElements([1, 1, -2, -3]));

function multiplyElements(array) {
    let multiplo = array.map(numero => numero*2);
    return multiplo;
}
 