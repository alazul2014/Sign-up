const userModule = require("../../src/models/user_creation.js");

const signupButton = document.getElementById("signupButton");

signupButton.addEventListener("click", () => {
    userModule.createUser("testUser", "testUser@gmail.com", "testUser", "12345677");
})