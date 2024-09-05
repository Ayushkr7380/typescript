"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addnum(num1) {
    return num1;
}
addnum(5);
function sum1(n1) {
    return n1 + 10;
}
sum1(23);
function number1(s1) {
    return s1.toFixed;
}
number1(12.5657);
function name1(name) {
    return name.toUpperCase();
}
name1("ayush");
//arrow function
var data = function (name, roll, phone) { };
data("ayush", "215ayush", 123);
//arrow function with default value
var defdata = function (name, phone, city) {
    if (city === void 0) { city = "muzaffarpur"; }
};
defdata("ayush", 123);
//Issue with the function
function val(num) {
    return "ayush"; //here i have not mentioned with i am returning so i can return any type of value i.e string,number,boolean etcetra
}
val(12);
//actual approch 
function value1(num) {
    return num; //In this example i have mentioned the type which i am returning..
}
value1(10);
//with arrow function
var name = function (nn) {
    return nn;
};
name('ayush');
//array 
//typescript is smart enough to detect that the value inside the array are strings..
var heros = ['spiderman', 'batman', 'ironman'];
heros.map(function (hero) {
    return "".concat(hero, " is best");
});
//we can return anything like number, boolean , string ..etc..
var villians = ['ultron', 'joker', 'humans'];
villians.map(function (vil) {
    return 12;
});
//Also typescript is smart enough to detect which value is number ,string,boolean etc..
var mixture = [12, 'ayush', true];
mixture.map(function (mix) {
    return mix;
});
//Typescript is smart but we can explicitly mention the type ..
var set1 = ['ayush', 'abhijeet', 'lucky', 'atul'];
set1.map(function (s) {
    return s;
});
//void type
//we can set the type to void in a function if we do not want to return anything ..
function voidexample(val) {
    console.log(val);
}
voidexample("ayush");
