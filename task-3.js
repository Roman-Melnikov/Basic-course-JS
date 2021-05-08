"use strict"

var a = Math.floor(Math.random() * 201) - 100; // первое случайное число от -100 до 100
var b = Math.floor(Math.random() * 201) - 100; // второе случайное число от -100 до 100

if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else {
    console.log(a + b);
}