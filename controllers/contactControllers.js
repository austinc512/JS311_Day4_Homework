// require data
// /Users/austincovey/Desktop/JS311_Day4_Homework/controllers

const dataSet = require("../data/contacts");

// console.log(dataSet);

/*
dataSet = [
  {
    _id: 1,
    name: 'Dale Cooper',
    occupation: 'FBI Agent',
    avatar: 'https://upload.wikimedia.org/wikipedia/en/5/50/Agentdalecooper.jpg'
  },
  {
    _id: 2,
    name: 'Spike Spiegel',
    occupation: 'Bounty Hunter',
    avatar: 'http://vignette4.wikia.nocookie.net/deadliestfiction/images/d/de/Spike_Spiegel_by_aleztron.jpg/revision/latest?cb=20130920231337'
  },
  {
    _id: 3,
    name: 'Wirt',
    occupation: 'adventurer',
    avatar: 'http://66.media.tumblr.com/5ea59634756e3d7c162da2ef80655a39/tumblr_nvasf1WvQ61ufbniio1_400.jpg'
  },
  {
    _id: 4,
    name: 'Michael Myers',
    occupation: 'Loving little brother',
    avatar: 'http://vignette2.wikia.nocookie.net/villains/images/e/e3/MMH.jpg/revision/latest?cb=20150810215746'
  },
  {
    _id: 5,
    name: 'Dana Scully',
    occupation: 'FBI Agent',
    avatar: 'https://pbs.twimg.com/profile_images/718881904834056192/WnMTb__R.jpg'
  }
]
*/

const getContacts = (req, res) => {
  res.json(dataSet);
};

const getContactById = (req, res) => {
  const result = dataSet.filter((element) => element._id == req.params.id);
  if (result.length === 0) {
    res.json(`This doesn't appear to be a valid contact ID`);
  } else {
    res.json(result[0]);
  }
};

const createContact = (req, res) => {
  // console.log(`request body:`);
  // console.log(req.body);
  /*
example contact:
{
    _id: 5,
    name: 'Dana Scully',
    occupation: 'FBI Agent',
    avatar: 'https://pbs.twimg.com/profile_images/718881904834056192/WnMTb__R.jpg'
}

Example request body:

{
    name: 'Dana Scully',
    occupation: 'FBI Agent',
    avatar: 'https://pbs.twimg.com/profile_images/718881904834056192/WnMTb__R.jpg'
}

Require what? Name, occupation
optional: avatar.
*/

  if (!req.body.name || !req.body.occupation) {
    res.json(`Not enough info provided :(`);
  } else {
    let newContact = {};
    newContact.name = req.body.name;
    newContact._id = Math.floor(Math.random() * 100000);
    newContact.avatar = req.body.avatar || "";
    newContact.occupation = req.body.occupation || "";
    dataSet.push(newContact);
    console.log(`contact added`);
    console.log(newContact);
    res.json(newContact);
  }
};

module.exports = {
  getContacts,
  getContactById,
  createContact,
};
