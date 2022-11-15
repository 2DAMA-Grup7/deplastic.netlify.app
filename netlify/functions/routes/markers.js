function get(req, res) {
  var database = require("../lib/db");
  database.query("SELECT * FROM Markers", function (err, result) {
    res.json(result);
  });
}

function post(req, res) {
  database.query(
    `INSERT INTO Markers (latitude, longitude, name, id) VALUES ('${req.body.latitude}','${req.body.longitude}','${req.body.name}',Null`,
    function (err, result) {
      if (err) {
        res.send("{ error: true }");
      } else {
        res.send("{ error: false }");
      }
      res.end();
    }
  );
}

function put(req, res) {
  var database = require("../lib/db");
  database.query(
    `UPDATE Users latitude='${req.body.latitude}',longitude='${req.body.longitude}', name='${req.body.name}', descritpion=${req.body.description} WHERE email='${req.body.email}'`,
    function (err, result) {
      if (err) {
        res.send("{ error: true }");
      } else {
        res.send("{ error: false }");
      }
      res.end();
    }
  );
}

function remove(req, res) {
  var database = require("../lib/db");
  database.query(
    `DELETE * FROM Users WHERE id = "${req.body.name}" `,
    function (err) {
      if (err) {
        res.send("{ error: true }");
      } else {
        res.send("{ error: false }");
      }
      res.end();
    }
  );
}

module.exports = { get, post, remove, put };
