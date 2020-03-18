const db = require('../');


module.exports = {
  findAll: function (req, res) {
    db.data.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}