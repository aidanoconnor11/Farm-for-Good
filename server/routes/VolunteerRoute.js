const express = require("express");
const SQL = require("../DBConnection");

// Initialize the express Router
const Router = express.Router();

// Route to get all of the volunteers
Router.get("/api/volunteers/all", async (request, response) => {

    // This is the query statement
    const queryStatement = "SELECT * FROM volunteers";

    // This makes a request to the MySQL database to get all of the volunteers
    SQL.query(queryStatement, (error, results) => {
        // Check for an error
        if (error) {
            response.send({ hasError: true });
        // If there is no error, send the results
        } else {
            response.send({ hasError: false, results });
        };
    });

});

// Route to create a volunteer when the volunteer has never been checked in
Router.post("/api/volunteers/create", async (request, response) => {
    const { body } = request;
    const { firstname, lastname, email } = body;

    // These are two query statements, one to check if the volunteer exists and another to create the volunteer if non existent
    const createVolunteerStatement = "INSERT INTO volunteers (firstName, lastName, email) VALUES (?,?,?);";
    const checkVolunteerStatement = "SELECT * FROM volunteers WHERE email = ?";

    // Check if the volunteer exists
    SQL.query(checkVolunteerStatement, [ email ], (error1, results) => {
        // Check for an error
        if (error1) {
            response.send({ hasError: true, error1 });
        // There are no errors
        } else {
            // If you did not find the volunteer by email
            if (results.length == 0) {
                SQL.query(createVolunteerStatement, [ firstname, lastname, email ], (error2, results) => {
                    // If there is an error
                    if (error2) {
                        response.send({ hasError: true, error2 });
                    // If there are no errors
                    } else {
                        response.send({ hasError: false, results });
                    };
                });
            
            // Otherwise we have found an issue with a matching email
            } else {
                response.send({ hasError: false, state: "User already exists.\n" });
            };
        };
    });
});


module.exports = Router;
