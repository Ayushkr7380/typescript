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
var defdata = function (name, phone, city) {
    if (city === void 0) { city = "muzaffarpur"; }
};
defdata("ayush", 123);
