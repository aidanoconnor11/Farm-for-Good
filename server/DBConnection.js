const mysql = require("mysql");

// Creates the MySQL connection with Amazon RDS MySQL instance information
const connection = mysql.createConnection({
    host: "mydb.cfwsgcrrnvcr.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "password123",
    database: "cfg"
});

// Connect to the MySQL instance
connection.connect((error, results) => {
    // If there is an error, print it
    if (error) {
        console.log(error);
    // Successful connection
    } else {
        console.log("Connected to MySQL\n");
    }
});

module.exports = connection;