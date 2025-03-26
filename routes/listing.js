const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const { isLoggedIn , isOwner, validateListing } = require("../middleware.js");


// Route to display all listings
router.get(
  "/",

  wrapAsync(async (req, res) => {
    try {
      const allListings = await Listing.find();
      res.render("listings/index", { allListings });
    } catch (err) {
      console.log(err);
      res.status(500).send("Error fetching listings");
    }
  })
);

//new route
router.get(
  "/new",
  isLoggedIn,

  wrapAsync(async (req, res) => {
    if (!req.isAuthenticated()) {
      req.flash("error", "You must be logged in to create a listing!");
      return res.redirect("/login");
    }
    res.render("listings/new");
  })
);

//show route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
      .populate({
        path: "reviews",
        populate: { path: "author" }
      })
      .populate("owner");
    if (!listing) {
      req.flash("error", "Listing you requested does not exist!");
      return res.redirect("/listings");
    }

    res.render("listings/show", { listing });
  })
);

//crete route
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(async (req, res, next) => {
    const newlisting = new Listing(req.body.listing);
    newlisting.owner = req.user._id;
    await newlisting.save();
    req.flash("success", "New Listing created!");
    res.redirect("/listings");
  })
);
//edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", " Listing you requested does not exist!");
      res.redirect("/listings");
    }
    res.render("listings/edit", { listing });
  })
);
//update route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = Listing.findByIdAndUpdate(id);

    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", " Listing updated!");
    res.redirect(`/listings/${id}`);
  })
);

//delete route
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const deletedlisting = await Listing.findByIdAndDelete(id);
    req.flash("success", " Listing deleted!");
    console.log(deletedlisting);
    res.redirect("/listings");
  })
);

module.exports = router;
