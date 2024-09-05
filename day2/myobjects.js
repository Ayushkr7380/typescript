"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: 'ayush',
    email: 'a@a.com',
    isValid: true
}; //designing an object like this does not make any sense 
//The usecase of object is through the function , you have to actually pass the object into the function or you have to return object through a function..
function createUser(_a) {
    var string = _a.name, boolean = _a.isValid;
}
createUser({ name: 'ayush', isValid: true });
