const express = require("express");
const SQL = require("../DBConnection");
// Initialize the express Router
const Router = express.Router();

Router.get("/api/plants/all", async (request, response) => {

    // This is the query statement
    const queryStatement = "SELECT * FROM plants";

    // This makes a request to the MySQL database to get all of the plants
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



Router.get("/api/plants/:plantName", async (request, response) => {

    // This is the query statement
    const queryStatement = "SELECT * FROM bugs WHERE plantName = ?";

    //get body from the request
    const{params} = request;
    const{plantName}= params;
    


    // This makes a request to the MySQL database to get a certain plants
    SQL.query(queryStatement, [plantName],(error, results) => {
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