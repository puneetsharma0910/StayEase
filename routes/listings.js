require("dotenv").config();

const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");

const { listingSchema } = require("../schema.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// Route to display all listings
router
  .route("/")
  .get(wrapAsync(listingController.index))

  .post(
    isLoggedIn,
  
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing)
  );

//new route`
router.get(
  "/new",
  isLoggedIn,

  wrapAsync(listingController.renderNewForm)
);

router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

//show route

//crete route
//edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);
//update route
//delete route

module.exports = router;
