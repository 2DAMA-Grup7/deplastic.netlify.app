function markers(req, res) {
  var database = require("../lib/db");
  database.query("SELECT * FROM Markers", function (err, result) {
    res.json(result);
  });
}

module.exports = markers;
