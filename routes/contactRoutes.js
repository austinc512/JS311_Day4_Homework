const express = require("express");
const router = express.Router();

const contactControllers = require("../controllers/contactControllers");

router.get("/contacts", contactControllers.getContacts);

router.get("/contacts/:id", contactControllers.getContactById);

router.post("/contacts", contactControllers.createContact);

module.exports = router;
