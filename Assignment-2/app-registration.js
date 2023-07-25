"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registrationForm");
    registrationForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const usernameInput = registrationForm.elements.namedItem("username");
        const passwordInput = registrationForm.elements.namedItem("password");
        const username = usernameInput.value;
        const password = passwordInput.value;
        registrationPage.addUser(username, password);
        alert("Registration successful!");
        registrationForm.reset();
    });
});
