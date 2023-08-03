const dataSet = require("../data/comments");

const getComments = (req, res) => {
  res.json(dataSet);
};

const getCommentById = (req, res) => {
  const result = dataSet.filter((element) => element._id == req.params.id);
  if (result.length === 0) {
    res.json(`This doesn't appear to be a valid comment ID`);
  } else {
    res.json(result[0]);
  }
};

const createComment = (req, res) => {
  console.log(req.body);
  // { _id: 3, body: 'Fetch is great!', postId: 1 }
  // will only require body property
  if (!req.body.body) {
    res.json("you have not supplied a body property");
  } else {
    const newComment = {};
    newComment._id = Math.floor(Math.random() * 100000);
    newComment.body = req.body.body;
    newComment.postId = 1;
    dataSet.push(newComment);
    console.log(dataSet);
    res.json(newComment);
  }
};

module.exports = {
  getComments,
  getCommentById,
  createComment,
};
