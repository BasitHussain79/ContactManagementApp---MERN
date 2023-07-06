const express = require("express");
const router = express.Router();

// @route   GET api/auth
// @desc    Get the logged in user
// @access  private

router.get("/", (req, res) => {
  res.send("Get Logged In");
});

// @route POST api/auth
// @desc Login the user
// @access public
router.post("/", (req, res) => {
  res.send("Login User");
});

module.exports = router;
