const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const ejsMate = require("ejs-mate")
const path = require("path");
const methodOverride = require("method-override");

const port = 8080;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")))

// MongoDB connection
const MONGO_URL = "mongodb://localhost:27017/StayEase";
main()
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

// Route to display all listings
app.get("/listings", async (req, res) => {
  try {
    const allListings = await Listing.find();
    res.render("listings/index", { allListings }); // ✅ Corrected path
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching listings");
  }
});

//new route
app.get("/listings/new", async (req, res) => {
  res.render("listings/new");
});

//show route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show", { listing });
});

//crete route
app.post("/listings", async (req, res) => {
  // let listing = req.body.listing;

  const newlisting = new Listing(req.body.listing);
  await newlisting.save();
  res.redirect("/listings");
});
//edit route
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit", { listing });
});
//update route
app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
});

//delete route
app.delete("/listings/:id",async (req,res) => {
  let { id } = req.params;
  const listing = await Listing.findByIdAndDelete(id);
  console.log(listing)
res.redirect("/listings")

  
}
)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
