"use strict"


/**
 * Выполняет сложение двух чисел
 * @param firstTerm{number} первое слагаемое
 * @param secondTerm{number} второе слагаемое
 * @returns {*} выводит сумму
 */
function getAmount(firstTerm, secondTerm) {
    return  firstTerm + secondTerm;
}

/**
 * Выполняет вычитание
 * @param decreasing{number} уменьшаемое
 * @param subtraction{number} вычитаемое
 * @returns {number} разность
 */
function getSubtract(decreasing, subtraction) {
    return  decreasing - subtraction;
}

/**
 * Выполняет произведение двух чисел
 * @param firstFactor{number} первый множитель
 * @param secondFactor{number} второй множитель
 * @returns {number} произведение
 */
function getProductNumbers(firstFactor, secondFactor) {
    return  firstFactor * secondFactor;
}

/**
 * Выполняет деление
 * @param dividend{number} делимое
 * @param divider{number} делитель
 * @returns {number} частное
 */
function getDegree(dividend, divider) {
    return  dividend / divider;
}

/**
 * функция выполняет, по запросу пользователя, одну из арифметических операций
 * @param arg1{number} первое ведённое число пользователем
 * @param arg2{number} второе ведённое число пользователем
 * @param operation{string} арифметическая операция указанная пользователем
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+" :
            document.write("сумма равна " + getAmount(arg1, arg2));
            break;
        case "-" :
            document.write("разность равна " + getSubtract(arg1, arg2));
            break;
        case "*" :
            document.write("произведение равно " + getProductNumbers(arg1, arg2));
            break;
        case "/" :
            document.write("частное равно " + getDegree(arg1, arg2));
            break;
        default :
            document.write("Арифметическая операция не определена");
    }
}


var userNumber1 = +prompt("Введите первое число :");
if (Number.isNaN(userNumber1)) {
    userNumber1 = +prompt("Необходимо ввести число :");
}
var userNumber2 = +prompt("Введите второе число :");
if (Number.isNaN(userNumber2)) {
    userNumber2 = +prompt("Необходимо ввести число :");
}
var selectOperation = prompt("Какую арифметическую операцию будем производить ? :", " + , - , * , / ");
selectOperation = selectOperation.toLowerCase();

mathOperation(userNumber1, userNumber2, selectOperation);