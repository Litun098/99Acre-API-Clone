const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstNmae: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  maxPrice: {
    type: String,
  },
  preferences: {
    priceRange: {
      from: Number,
      to: {
        type: Number,
        required: true,
      },
    },
    bedrooms: {
      type: Number,
    },
    bathrooms: Number,
    propertyType: String,
    createdAt: {
      type: Date,
      immutable: true,
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
    favouriteProperties: [
      {
        propertyId: {
          type: String,
        },
        propertyAddress: {
          type: String,
        },
        listPrice: {
          type: Number,
        },
        bedrooms: Number,
        bathrooms: Number,
        property: String,
      },
    ],
    registerationDate: {
      type: Date,
      default: Date.now(),
      immutable: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now(),
    },
  },
});

module.exports = mongoose.model("User", userSchema);
