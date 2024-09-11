"use strict";
//Protected Keyword ...
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
//Protected keyword helps to access the property or methods from the inherited class also..
var father = /** @class */ (function () {
    function father(name) {
        this.name = name;
        this.money = 1234;
    }
    return father;
}());
var son = /** @class */ (function (_super) {
    __extends(son, _super);
    function son() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    son.prototype.spendMoney = function () {
        this.money = 123;
    };
    return son;
}(father));
var obj2 = new son("ayush");
