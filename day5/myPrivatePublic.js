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
//private and public in typescript classes
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
