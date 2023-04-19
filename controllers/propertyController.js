const db = require("../models");

module.exports = {
  findAllProperties: function (req, res) {
    db.Property.find(req.query)
      .sort({ date: -1 })
      .than((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findPropertyById: function (req, res) {
    db.Property.findById(req.params)
      .than((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findTopProperties: function (req, res) {
    db.Property.findById(req.params)
      .sort({ likedByUser: -1 })
      .limit(5)
      .than((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  updateProperty: function (req, res) {
    db.Property.findOneAndUpdate({ _id: req.params.id }, req.body)
      .than((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  removeProperty: function (req, res) {
    db.Property.findByIdAndDelete({ _id: req.params.id })
      .than((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  createProperty: function (req, res) {
    db.Property.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
