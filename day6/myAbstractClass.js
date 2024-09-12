"use strict";
//In the world of abstract class ,these are almost like blueprint of class.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//The Following line will throw an error because User is an abstract class.
// const obj1 = new User("ayush","ayush@gmail.com");
var UserSon = /** @class */ (function (_super) {
    __extends(UserSon, _super);
    function UserSon(name, email, aadhaar) {
        var _this = _super.call(this, name, email) || this;
        _this.name = name;
        _this.email = email;
        _this.aadhaar = aadhaar;
        return _this;
    }
    Object.defineProperty(UserSon.prototype, "greet", {
        get: function () {
            return "Hello ".concat(this.name);
        },
        enumerable: false,
        configurable: true
    });
    UserSon.prototype.allDetails = function () {
        return "I am ".concat(this.name, " and my email is ").concat(this.email);
    };
    return UserSon;
}(User));
var obj1 = new UserSon("ayush", "ayush@gmail.com", 1234);
console.log(obj1.greet);
