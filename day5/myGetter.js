"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, email, isActive) {
        this.name = name;
        this.email = email;
        this.personalId = 1;
    }
    Object.defineProperty(User.prototype, "getUserEmail", {
        get: function () {
            return "".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getPersonalId", {
        get: function () {
            return this.personalId;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var obj = new User('ayush', 'ayush@123.com', true);
