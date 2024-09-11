"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
