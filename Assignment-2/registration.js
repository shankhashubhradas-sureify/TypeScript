"use strict";
class MyRegistration {
    constructor() {
        this.users = [];
    }
    addUser(username, password) {
        this.users.push([username, password]);
    }
    getUser(username) {
        return this.users.find((user) => user[0] === username);
    }
    removeUser(username) {
        this.users = this.users.filter((user) => user[0] !== username);
    }
}
const registrationPage = new MyRegistration();
