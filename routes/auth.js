const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");
const auth = require("../middlewares/auth");

const router = express.Router();

// @route   GET api/auth
// @desc    Get the logged in user
// @access  private

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json({
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 500,
      msg: "Server error",
    });
  }
});

// @route POST api/auth
// @desc Login the user
// @access public
router.post(
  "/",
  [
    check("email", "Please provide a valid email address").isEmail(),
    check("password", "Please provide a valid password").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req.body);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 400,
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          status: 400,
          msg: "User with this email does not exists",
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          status: 400,
          msg: "Invalid password",
        });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 3600000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ status: 500, msg: "Server error" });
    }
  }
);

module.exports = router;
