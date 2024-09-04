"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//string 
var name1 = 'ayush';
console.log(name1);
//number 
//In TypeScript we have number varaible , only number varaible , there is no float or int....
var roll = 123;
console.log(roll);
var num;
num = 2;
console.log(num);
var price = 200.45;
console.log(price);
var n1 = 123; //typescript is smart enough to detect that it is a number without putting :<varaible type> 
console.log(n1);
//boolean
var isBoy = true;
console.log(isBoy);
// ------ when to use :<variable type> ------ 
var hero;
function heroname() {
    return "IronMan";
}
hero = heroname();
//any 
//any varaible is used when you don't wanna define any type to a varaible 
var name = 123;
console.log(name);
