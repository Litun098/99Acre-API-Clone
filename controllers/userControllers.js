const db = require("../models");

module.exports = {
  findAllUsers: function (req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .than((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findUserById: function (req, res) {
    db.User.findById(req.params)
      .sort({ date: -1 })
      .than((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  updateUser: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .than((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  removeUser: function (req, res) {
    db.User.findByIdAndDelete({ _id: req.params.id })
      .than((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  createUser: function (req, res) {
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
