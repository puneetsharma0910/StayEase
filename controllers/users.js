const User = require("../models/user");

module.exports.createUsers = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    let newUser = new User({ email, username });

    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, (err) => {
      if (err) {
        next(err);
      }
      req.flash("success", `Welcome to StayEase ${username} 😉`);
      res.redirect("/listings");
    });
  } catch (error) {
    req.flash("error", error.message);
    res.redirect("/signup");
  }
};

module.exports.login = (req, res) => {
  req.flash("success", "Welcome back!");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      next(err);
    }
    req.flash("success", "You are logged out");
    res.redirect("/listings");
  });
};
module.exports.renderSignupForm = (req, res) => {
  res.render("./users/signup.ejs");
};

module.exports.renderLoginForm = (req, res) => {
  res.render("./users/login.ejs");
};
