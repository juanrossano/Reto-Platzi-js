// console.log();
console.log(isLeapYear(2000));
console.log(isLeapYear(-2024));
console.log(isLeapYear(1984.25));

function isLeapYear(year) {
    let esBisiesto;
    esBisiesto = ((year>0) && ((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0)));
    return esBisiesto;
  }
  