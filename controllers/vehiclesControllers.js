const dataSet = require("../data/vehicles");

// console.log(dataSet);

/*
dataSet = 
[
  {
    _id: 1,
    imgUrl: './featured-img-1.jpg',
    year: '2004',
    make: 'HONDA',
    model: 'Accord',
    price: '$7456.40',
    km: 34720,
    miles: 10615,
    fuel: 'Gas',
    city: 'Colca',
    isNew: false
  },
  {
    _id: 2,
    imgUrl: './featured-img-2.jpg',
    year: '2005',
    make: 'HONDA',
    model: 'Civic',
    price: '$1456.78',
    km: 72218,
    miles: 22287,
    fuel: 'Gas',
    city: 'Kristianstad',
    isNew: false
  },
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
  },
 ...
]
*/

const getVehicles = (req, res) => {
  // do something
  res.json(dataSet);
};

const getVehicleById = (req, res) => {
  // do something
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
