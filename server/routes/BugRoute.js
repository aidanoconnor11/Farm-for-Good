// Initialize the express Router
const express = require("express");
const SQL = require("../DBConnection");
const Router = express.Router();

Router.get("/api/bugs/all", async (request, response) => {

    // This is the query statement
    const queryStatement = "SELECT * FROM bugs";

    // This makes a request to the MySQL database to get all of the bugs
    SQL.query(queryStatement, (error, results) => {
        // Check for an error
        if (error) {
            response.send({ hasError: true,error });
        // If there is no error, send the results
        } else {
            response.send({ hasError: false, results });
        };
    });

});


Router.get("/api/bugs/:bugName", async (request, response) => {

    // This is the query statement
    const queryStatement = "SELECT * FROM bugs WHERE bugName = ?";

    //get body from the request
    const{params} = request;
    const{bugName}= params;
    


    // This makes a request to the MySQL database to get a certain bugs
    SQL.query(queryStatement, [bugName],(error, results) => {
        // Check for an error
        if (error) {
            response.send({ hasError: true });
        // If there is no error, send the results
        } else {
            response.send({ hasError: false, results });
        };
    });

});

module.exports = Router;