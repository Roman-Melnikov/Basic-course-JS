// task 1:

"use strict";

var a = 1, b = 1, c, d;
c = ++a; alert(c);           //2 префиксная форма инкеремента ,переменная "а" будет увеличена на 1 и полученное значение будет положено в "с"
d = b++; alert(d);           //1 постфиксная форма инкремента ,переменной  "d" будет присвоено значение "b" , а потом "b" будет увеличено на 1
c = (2+ ++a); alert(c);      //5 вначале "а" увеличивается на 1 (будет 3, т.к. её текущее значение стало равно 2 в 4-ой строке кода), затем выполнятеся выражение в скобках , после полученное значение присваивается "с"
d = (2+ b++); alert(d);      //4 к 2-ке будет прибавлено текущее значение "b"(равно 2 (5-я строка кода)) и полученное значение будет присвоено "d"
alert(a);                    //3 т.к. ,было увеличение на 1 в строках :4 и 6
alert(b);                    //3 т.к. ,было увеличение на 1 в строках :5 и 7


// task 2:

var a = 2;
var x = 1 + (a *= 2);       //5 оператор "*=" как-бы говорит : умножь "a" на 2 и полож полученное значение в "a"