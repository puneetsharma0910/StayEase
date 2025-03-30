const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
  try {
    const allListings = await Listing.find();
    res.render("listings/index", { allListings });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching listings");
  }
};

module.exports.renderNewForm = async (req, res) => {
  res.render("listings/new");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: { path: "author" },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested does not exist!");
    return res.redirect("/listings");
  }

  res.render("listings/show", { listing });
};

module.exports.createListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;
  const newlisting = new Listing(req.body.listing);
  newlisting.owner = req.user._id;
  newlisting.image = {url,filename}
  await newlisting.save();
  req.flash("success", "New Listing created!");
  res.redirect("/listings");
};
module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", " Listing you requested does not exist!");
    res.redirect("/listings");
  }
  res.render("listings/edit", { listing });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = Listing.findByIdAndUpdate(id);

  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  req.flash("success", " Listing updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  const deletedlisting = await Listing.findByIdAndDelete(id);
  req.flash("success", " Listing deleted!");
  console.log(deletedlisting);
  res.redirect("/listings");
};
