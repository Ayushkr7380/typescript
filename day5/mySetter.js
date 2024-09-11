"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function class_1(name, email) {
        this.name = name;
        this.email = email;
        this.idNumber = 1;
    }
    Object.defineProperty(class_1.prototype, "setValue", {
        set: function (maxNumber) {
            if (maxNumber > 1) {
                throw new Error("Course count should be more than 1..");
            }
            this.idNumber = maxNumber;
        },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
var obj = new User('ayush', 'ayush@gmail.com');
