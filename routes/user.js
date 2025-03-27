const express = require("express");
const router = express.Router();

const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync");
const { saveDirectUrl } = require("../middleware");
const userController = require("../controllers/users");

router.get("/signup", userController.renderSignupForm);

router.post("/signup", wrapAsync(userController.createUsers));

//login route
router.get("/login", userController.renderLoginForm);

router.post(
  "/login",
  saveDirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.login
);

//logout route
router.get("/logout", userController.logout);

module.exports = router;
