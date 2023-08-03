const dataSet = require("../data/vehicles");

const getVehicles = (req, res) => {
  res.json(dataSet);
};

const getVehicleById = (req, res) => {
  const result = dataSet.filter((element) => element._id == req.params.id);
  if (result.length === 0) {
    res.json(`This doesn't appear to be a valid vehicle ID`);
  } else {
    res.json(result[0]);
  }
};

const createVehicle = (req, res) => {
  /*
    required:
    year: '2001',
    make: 'HONDA',
    model: 'CRV',
    */

  if (!req.body.year || !req.body.make || !req.body.model) {
    res.json(`Not enough information to make an entry`);
  } else {
    const newVehicle = {};
    newVehicle._id = Math.floor(Math.random() * 100000);
    newVehicle.imgUrl = req.body.imgUrl || "";
    newVehicle.year = req.body.year;
    newVehicle.make = req.body.make;
    newVehicle.model = req.body.model;
    newVehicle.price = req.body.price || "";
    newVehicle.km = req.body.km || undefined;
    newVehicle.miles = req.body.miles || undefined;
    newVehicle.fuel = req.body.fuel || "";
    newVehicle.city = req.body.city || "";
    newVehicle.isNew = req.body.isNew || false;
    dataSet.push(newVehicle);
    console.log(dataSet);
    res.json(newVehicle);
  }
};

/*
ex:
  {
    _id: 3,
    imgUrl: './featured-img-1.jpg',
    year: '2001',
    make: 'HONDA',
    model: 'CRV',
    price: '$9456.14',
    km: 22853,
    miles: 25021,
    fuel: 'Gas',
    city: 'Lom Kao',
    isNew: false
  }
*/

module.exports = {
  getVehicles,
  getVehicleById,
  createVehicle,
};
