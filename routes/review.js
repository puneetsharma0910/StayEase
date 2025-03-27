const express = require("express");
const router = express.Router({ mergeParams: true });

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

const { validateReview, isLoggedIn, isAuthor } = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

//review route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReviews)
);
//delete review route
router.delete("/:reviewId", isLoggedIn, isAuthor,
   wrapAsync(reviewController.destroyReview));

module.exports = router;
