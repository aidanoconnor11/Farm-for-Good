const express = require("express");
const cors =  require("cors");
const MySQLConnection = require("./DBConnection");
const VolunteerRoutes = require("./routes/VolunteerRoute");
const PlantRoutes = require("./routes/PlantRoute");
const BugRoutes = require("./routes/BugRoute");
const TaskRoutes = require("./routes/TaskRoute");
//import routes

const expressApp = express();
const PORT = 10505;

expressApp.use(cors());
expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }));

//use the routes we created
expressApp.use(VolunteerRoutes);
expressApp.use(BugRoutes);
expressApp.use(PlantRoutes);
expressApp.use(TaskRoutes);

expressApp.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}.`);
});