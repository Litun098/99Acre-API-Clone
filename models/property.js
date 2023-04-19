const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
  listingId: {
    type: String,
  },
  listingAgent: {
    type: String,
  },
  listingCompany: {
    type: String,
  },
  daysListed: {
    type: Number,
  },
  address: {
    type: String,
  },
  city: String,
  zipCode: Number,
  propertyType: String,
  yearBuilt: Number,
  listPrice: Number,
  lotSqFeet: Number,
  bathroom: Number,
  subDivision: String,
  photoGalary: {
    type: [],
  },
  propertyId: String,
  description: String,
  email: String,
  annualPropTax: Number,
  taxCountry: String,
  utilityCompany: String,
  schoolInfo: String,
  propFeatures: String,
  hoaFee: String,
  image: String,
  listingLink: String,
  propDetailSumary: String,
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  likedByUser: [
    {
      type: String,
      userFullName: String,
    },
  ],
});

module.exports = mongoose.model("Property", propertySchema);
