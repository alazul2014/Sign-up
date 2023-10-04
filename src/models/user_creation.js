const db = require("./db");
const dotenv = require("dotenv").config();

export function createUser(nombre, email, password, phone_number) {
    db.query("INSERT INTO usuarios (nombre, email, password, phone_number) VALUES (", nombre, ", ", email, ", ", password, ", ", phone_number, ")", (error, result, fields) => {
        if (error) {
            console.error("Error creating a new user: ", error);
        } else {
            console.log("User created successfully!");
        }
    });

};