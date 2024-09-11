"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//basic class and object 
var User = /** @class */ (function () {
    function User(email, name) {
        this.city = 'muz';
        this.email = email;
        this.name = name;
    }
    return User;
}());
var obj = new User('a@a.com', 'ayush');
console.log(obj);
//private and public keyword in typescript classes
var User1 = /** @class */ (function () {
    function User1(email, name, id) {
        this.email = email;
        this.name = name;
        this.id = id;
    }
    return User1;
}());
var obj1 = new User1('ayush@123.com', 'ayush', '123');
console.log(obj1.email); //Here we can easily log email as it is not set private..
// console.log(obj1.id); // Here we can not log the id as we have set it as private..so it is not accessible inside the class itself.. 
//WE WILL SEE LESS CODE LIKE THE CODE I HAVE WRITTEN ABOVE AND CREATED CLASSES..
var User3 = /** @class */ (function () {
    function User3(email, name, id) {
        this.email = email;
        this.id = id;
        console.log("My email id is ".concat(email, " , name is ").concat(name, " and id is ").concat(id));
    }
    return User3;
}());
var obj3 = new User3('ayush@34.com', 'Ayush', '12');
