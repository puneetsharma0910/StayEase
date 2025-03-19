const mongoose = require("mongoose");
const initdata = require("./data.js");

const Listing = require("../models/listing");
const MONGO_URL = "mongodb://localhost:27017/StayEase";

async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(async () => {
    console.log("mongodb is connected");

  })
  .catch((err) => {
    console.log(err);
  });
const sampledata = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initdata.data);
  console.log("inserted success");
};
sampledata()
