"use strict"

function power(val, pow) {
    if (pow === 1) {
        return val;
    }
    return power(val, pow - 1) * val;
}

var numberUser = +prompt("Введите число , которое надо возвести в степень");
if (Number.isNaN(numberUser)) {
    numberUser = +prompt("Необходимо ввести число");
}
var powerUser = +prompt("Введите степень");
if (Number.isNaN(powerUser)) {
    powerUser = +prompt("Необходимо ввести число");
}

alert(numberUser + " в " + powerUser + " степени равно :\n" + power(numberUser, powerUser));