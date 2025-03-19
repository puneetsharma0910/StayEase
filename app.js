const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require('path')
const port = 8080;
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));
const MONGO_URL = "mongodb://localhost:27017/StayEase";
main()
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}
app.get("/listings", async(req, res) => {
    const allListings = await Listing.find();
    res.render("listings/index.ejs", { allListings });
});



//sample route for testing
// app.get("/testlisting", async (req, res) => {
//   const sample = new Listing({
//     title: " new Home",
//     description: " best villa",
//     image:
//       "https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg?semt=ais_hybrid",
//     location: "udaipur",
//     country: "India",
//   });
//   await sample.save();
//   console.log("sample saved");
//   res.send("succesfully tested");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
