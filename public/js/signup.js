document.addEventListener('DOMContentLoaded', function () {
    var signupButton = document.getElementById('signupButton');

    function handleClick() {
        var nombre = "test";
        var email = "test@test.com";
        var password = "test";
        var phoneNumber = 123456;

        fetch('/create-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, email, password, phoneNumber })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log({ nombre, email, password, phoneNumber })
                console.error("Error creating a new user: ", error);
            });

    }

    signupButton.addEventListener('click', handleClick);
});