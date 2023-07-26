var express = require("express");
var server = express();
var mongoose = require("mongoose");
var colors = require("colors");
var routes = require("./routes/routes.js");
const cors = require("cors");

mongoose
  .connect("mongodb+srv://Amey45:Amey45@webdev.kioovy1.mongodb.net/est")
  .then(() => console.log("Connected To Mongodb Database".bgMagenta.white))
  .catch((error) => console.log("Error in Mongodb".bgRed.white));

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8000, () => {
  try {
    console.log("Server Running in development mode on port 8000".bgCyan.white);
  } catch (error) {
    console.log("error connecting server".bgRed.white);
  }
});
