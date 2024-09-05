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
    return num;
}
value1(10);
