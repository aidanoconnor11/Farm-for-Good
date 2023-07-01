const express = require("express");
const SQL = require("../DBConnection");

// Initialize the express Router
const Router = express.Router();


//get all tasks
Router.get("/api/tasks/all", async (request, response) => {

    // This is the query statement
    const queryStatement = "SELECT * FROM tasks";

    // This makes a request to the MySQL database to get all of the tasks
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

//delete a task by the task name 
Router.delete("/api/tasks/:name", async (request, response) => {

    // This is the query statement
    const queryStatement = "DELETE FROM tasks WHERE taskName = ?";

    //get body from the request
    const{params} = request;
    const{taskName}= params;

    // This makes a request to the MySQL database to delete a certain task
    SQL.query(queryStatement,[taskName], (error, results) => {
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