// console.log();
console.log(calculateTip(100, 10));
console.log(calculateTip(1524.33, 25));


function calculateTip(billAmount, tipPercentage) {
    let propina = billAmount * tipPercentage / 100;
    return propina;
}
