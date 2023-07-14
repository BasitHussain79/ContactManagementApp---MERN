const express = require("express");
const { validationResult, check } = require("express-validator");
const auth = require("../middlewares/auth");

const Contact = require("../models/Contact");
const User = require("../models/User");

const router = express.Router();

// @routes GET api/contacts
// @desc get all contacts
// @access private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });

    res.json(contacts);
  } catch (err) {
    res.status(500).json({
      status: 500,
      msg: "Server Error",
    });
  }
});

// @router POST api/contacts
// @desc create a new contact
// @access private
router.post(
  "/",
  [
    auth,
    [check("name", "Name is required").not().isEmpty()],
    [check("email", "Email is required").isEmail()],
    [check("phone", "Phone is required").not().isEmpty()],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 400,
        errors: errors.array(),
      });
    }

    const { name, email, phone, relation } = req.body;
    try {
      const newContact = await new Contact({
        name,
        email,
        phone,
        relation,
        user: req.user.id,
      });

      await newContact.save();

      res.json(newContact);
    } catch (err) {
      res.status(500).json({
        status: 500,
        msg: "Server Error",
      });
    }
  }
);

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
