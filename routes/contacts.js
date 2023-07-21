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
router.put("/:id", auth, async (req, res) => {
  const { name, email, phone, relation } = req.body;

  let contact = await Contact.findById(req.params.id);

  if (!contact) {
    return res.status(404).json({
      status: 404,
      msg: "Contact not found",
    });
  }

  const contactFields = {};
  if (name) contactFields.name = name;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (relation) contactFields.relation = relation;

  if (contact.user.toString() !== req.user.id) {
    return res.status(401).json({
      status: 401,
      userId: contact.user,
      id: req.user.id,
      msg: "You do not have correct authorization",
    });
  }

  try {
    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    );

    res.json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 500,
      msg: "Server error",
    });
  }
});

// @router DELETE api/contacts/:id
// @desc Delete a contact by id
// @access private
router.delete("/:id", auth, async (req, res) => {
  let contact = await Contact.findById(req.params.id);

  if (!contact) {
    return res.status(404).json({
      status: 404,
      msg: "Contact not found",
    });
  }

  if (contact.user.toString() !== req.user.id) {
    return res.status(401).json({
      status: 401,
      userId: contact.user,
      id: req.user.id,
      msg: "You do not have correct authorization",
    });
  }

  try {
    await Contact.findByIdAndRemove(req.params.id);

    res.json({
      msg: "This contact has been removed.",
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      status: 500,
      msg: "Server error",
    });
  }
});

module.exports = router;
