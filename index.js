const express = require("express");
const app = express();

// require data here ?

// wat
app.use(express.static("public"));

// middleware parser
app.use(express.json());

const port = process.env.PORT || 5001;

// require the contacts router
const contacts = require("./routes/contactRoutes");

// use the contacts route in my app
app.use(contacts);

// require the vehicles router
const vehicles = require("./routes/vehiclesRoutes");

// use the vehicles route in my app
app.use(vehicles);

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
