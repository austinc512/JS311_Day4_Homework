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
  /*

I think everything should be required execpt the reviews and _id
example object:

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
  if (
    !req.body.name ||
    !req.body.description ||
    !req.body.rating ||
    !req.body.imgUrl ||
    !req.body.price ||
    !req.body.category
  ) {
    res.json("you have not supplied a product property");
  } else {
  }
};

module.exports = {
  getProducts,
  getProductById,
};
