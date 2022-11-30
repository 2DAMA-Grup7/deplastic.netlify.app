function get(req, res) {
  var database = require("../lib/db");

  database.query("SELECT * FROM Markers", function (err, result) {
    res.json(result);
  });
}

function post(req, res) {
  var database = require("../lib/db");
  database.query(
    `INSERT INTO Markers (id_marker, name, latitude, longitude, description) VALUES (NULL, "${req.body.name}","${req.body.latitude}","${req.body.longitude}","${req.body.description}")`,
    function (err, result) {
      if (err) {
        res.send(JSON.stringify({ success: false }));
        res.end();
      } else {
        res.send(JSON.stringify({ success: true }));
        res.end();
      }
    }
  );
}

function put(req, res) {
  var database = require("../lib/db");
  database.query(
    `UPDATE Markers SET latitude='${req.body.latitude}',longitude='${req.body.longitude}', name='${req.body.name}', 
    description=${req.body.description} WHERE id_marker='${req.body.id_marker}'`,
    function (err, result) {
      if (err) {
        res.send(JSON.stringify({ success: false }));
      } else {
        res.send(JSON.stringify({ success: true }));
      }
      res.end();
    }
  );
}

function remove(req, res) {
  var database = require("../lib/db");
  database.query(
    `DELETE FROM Markers WHERE id_marker = "${req.body.id_marker}" `,
    function (err) {
      if (err) {
        res.send(JSON.stringify({ success: false }));
      } else {
        res.send(JSON.stringify({ success: true }));
      }
      res.end();
    }
  );
}

module.exports = { get, post, remove, put };
