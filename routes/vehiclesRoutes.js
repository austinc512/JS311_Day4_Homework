const express = require("express");
const router = express.Router();

const vehiclesControllers = require("../controllers/vehiclesControllers");

router.get("/vehicles", vehiclesControllers.getVehicles);

router.get("/vehicles/:id", vehiclesControllers.getVehicleById);

router.post("/vehicles/", vehiclesControllers.createVehicle);

module.exports = router;
