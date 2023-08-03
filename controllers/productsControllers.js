const dataSet = require("../data/products");

// console.log(dataSet);
/*
[
  {
    _id: 1,
    name: 'Body Luxuries Sweet Lavender Hand Sanitizer',
    description: 'Psychotropic drugs, not elsewhere classified',
    rating: 2,
    imgUrl: 'http://dummyimage.com/136x167.bmp/cc0000/ffffff',
    price: '$95.11',
    category: 'food',
    reviews: [
      {
        "description": "architect revolutionary deliverables",
        "rating": 2
      },
      {
        "description": "orchestrate dynamic schemas",
        "rating": 2
      },
      ...
    ]
  },
  ...
]  
*/

const getProducts = (req, res) => {
  res.json(dataSet);
};

const getProductById = (req, res) => {
  // res.json(dataSet);
  const result = dataSet.filter((element) => element._id == req.params.id);
  if (result.length === 0) {
    res.json(`This doesn't appear to be a valid comment ID`);
  } else {
    res.json(result[0]);
  }
};

const createProduct = (req, res) => {
  console.log(`entering create product block`);
  console.log(req.body);
  /*
{
    "_id": 2,
    "name": "Topiramate",
    "description": "Injury of ulnar nerve at forearm level, left arm, sequela",
    "rating": 2,
    "imgUrl": "http://dummyimage.com/125x134.jpg/cc0000/ffffff",
    "price": "$37.09",
    "category": "food",
    "reviews": [
      {
          "description": "architect revolutionary deliverables",
          "rating": 2
      },
      ...
}      
*/
  if (!req.body.name || !req.body.description) {
    res
      .status(400)
      .json({ message: "you have not supplied a product property" });
  } else {
    console.log(`product successfully sent`);
    const newProduct = {};
    newProduct.name = req.body.name;
    newProduct.description = req.body.description;
    newProduct.imgUrl = req.body.imgUrl ?? "";
    newProduct.price = req.body.price ?? "";
    newProduct.category = req.body.category ?? "";
    newProduct._id = Math.floor(Math.random() * 100000);
    newProduct.reviews = [];
    // validate reviews: only push to newProduct.reviews if review has description AND rating
    if (req.body.reviews && req.body.reviews.length > 0) {
      for (let item of req.body.reviews) {
        // console.log(item.description);   (misc troubleshooting)
        // console.log(item.rating);
        // console.log(Boolean(item.description && item.rating));
        if (item.description && item.rating) {
          newProduct.reviews.push(item);
        }
      }
    }
    dataSet.push(newProduct);
    console.log(`NEW PRODUCT BELOW`);
    console.log(newProduct);
    console.log(dataSet);
    res.json(newProduct);
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
};

/*
{
    "_id": 1,
    "name": "Body Luxuries Sweet Lavender Hand Sanitizer",
    "description": "Psychotropic drugs, not elsewhere classified",
    "rating": 2,
    "imgUrl": "http://dummyimage.com/136x167.bmp/cc0000/ffffff",
    "price": "$95.11",
    "category": "food",
    "reviews": [{
      "description": "architect revolutionary deliverables",
      "rating": 2
    }, {
      "description": "orchestrate dynamic schemas",
      "rating": 2
    }, {
      "description": "aggregate integrated convergence",
      "rating": 4
    }, {
      "description": "incubate strategic e-tailers",
      "rating": 5
    }, {
      "description": "transition synergistic partnerships",
      "rating": 1
    }, {
      "description": "matrix dynamic web-readiness",
      "rating": 1
    }, {
      "description": "exploit impactful platforms",
      "rating": 4
    }, {
      "description": "repurpose mission-critical schemas",
      "rating": 1
    }, {
      "description": "iterate open-source interfaces",
      "rating": 3
    }, {
      "description": "repurpose impactful interfaces",
      "rating": 1
    }]
  }
*/
