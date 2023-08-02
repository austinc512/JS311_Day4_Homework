const express = require("express");
const router = express.Router();

const commentsControllers = require("../controllers/commentsControllers");

router.get("/comments", commentsControllers.getComments);

router.get("/comments/:id", commentsControllers.getCommentById);

router.post("/comments/", commentsControllers.createComment);

module.exports = router;
