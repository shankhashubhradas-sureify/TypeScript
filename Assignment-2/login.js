"use strict";
var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Blocked"] = 1] = "Blocked";
})(Status || (Status = {}));
class Login {
    constructor() {
        this.users = [];
    }
    addUser(user) {
        this.users.push(user);
    }
    getUser(username) {
        return this.users.find((user) => user.username === username);
    }
    isBlocked(username) {
        const user = this.getUser(username);
        return user ? user.status === Status.Blocked : false;
    }
}
const loginPage = new Login();
loginPage.addUser({
    username: "admin",
    password: "admin",
    status: Status.Active,
});
loginPage.addUser({
    username: "user",
    password: "user",
    status: Status.Blocked,
});
