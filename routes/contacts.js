const express = require("express");
const router = express.Router();

// @routes GET api/contacts
// @desc get all contacts
// @access private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @router POST api/contacts
// @desc create a new contact
// @access private
router.post("/", (req, res) => {
  res.send("Create a new contact");
});

// @router PUT api/contacts/:id
// @desc update a contact by id
// @access private
router.put("/:id", (req, res) => {
  res.send("update a contact by id");
});

// @router DELETE api/contacts/:id
// @desc Delete a contact by id
// @access private
router.post("/:id", (req, res) => {
  res.send("Delete a contact by id");
});

module.exports = router;
