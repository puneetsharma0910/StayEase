const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport")
const wrapAsync = require("../utils/wrapAsync");

router.get("/signup", (req, res) => {
  res.render("./users/signup.ejs");
});

router.post(
  "/signup",
  wrapAsync(async (req, res) => {
    try {
      let { username, email, password } = req.body;
      let newUser = new User({ email, username });

      const registeredUser = await User.register(newUser, password);
      console.log(registeredUser);
      req.flash("success", `Welcome to StayEase ${username} 😉`);
      res.redirect("/listings");
    } catch (error) {
      req.flash("error", error.message);
      res.redirect("/signup");
    }
  })
);

//login route
router.get("/login", (req, res) => {
  res.render("./users/login.ejs");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  (req, res) => {
    req.flash("success", "Welcome back!");
    res.redirect("/listings");
  }
);

module.exports = router;
