"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return { name: user.name, email: user.email, phone: user.phone, isActive: user.isActive };
}
createUser({ name: 'ayush', email: 'a@a.com', phone: 123, isActive: true });
