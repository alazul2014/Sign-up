document.addEventListener('DOMContentLoaded', function () {
    var loginButton = document.getElementById("loginButton");

    function loginClick() {
        console.log("Login link");
    };

    loginButton.addEventListener("click", loginClick);
})