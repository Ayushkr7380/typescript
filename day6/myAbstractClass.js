"use strict";
//In the world of abstract class ,these are almost like blueprint of class.
Object.defineProperty(exports, "__esModule", { value: true });
//We can not create object of abstract class.
//It's the responsibility of the class who is extending it to create object
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    return User;
}());
