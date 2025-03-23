const express = require("express");
const app = express();
const mongoose = require("mongoose");

const ejsMate = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");

const ExpressError = require("./utils/ExpressError");

const port = 8080;
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// MongoDB connection
const MONGO_URL = "mongodb://localhost:27017/StayEase";
main()
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}


app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews)
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "page not found"));
});

//middleware
app.use((err, req, res, next) => {
  let { statusCode, message } = err;
  // res.status(statusCode).send(message);
  res.status(statusCode).render("listings/error.ejs", { message });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
