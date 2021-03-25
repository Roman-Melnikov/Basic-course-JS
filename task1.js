"use strict"

var object = {};

while (true) {
    var number = prompt("Введите число от 0 до 999");
    if (isFinite(number)) {
        break;
    }
    alert("Вы ввели не число");
}

console.log(makeAnObject(number));

/**
 * Функция преобразующая число в объект
 *
 */
function makeAnObject (number) {
    switch (number.length) {
        case 1:
            object.ed = number[0];
            break;
        case 2:
            object.ed = number[0];
            object.des = number[1];
            break;
        case 3:
            object.ed = number[0];
            object.des = number[1];
            object.h = number[2];
            break;
        default:
            console.log("Число превышает 999")
    }
    return object;
}