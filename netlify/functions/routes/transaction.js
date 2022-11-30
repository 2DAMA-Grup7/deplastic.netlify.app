function put(req, res) {
  var database = require("../lib/db");
  database.query(
    `UPDATE Transaccio nom='${req.body.nom}',url='${req.body.url}', description='${req.body.description}', preu='${req.body.preu}' WHERE id='${req.body.id}'`,
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

function get(req, res) {
  var database = require("../lib/db");
  database.query("SELECT * FROM Transaccio", function (err, result) {
    res.json(result);
  });
}

function remove(req, res) {
  var database = require("../lib/db");
  database.query(
    `DELETE * FROM Transaccio WHERE nom = "${req.body.nom}" `,
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

function post(req, res) {
  var database = require("../lib/db");
  database.query(
    `INSERT INTO Transaccio (nom, url, id, description, price) VALUES ('${req.body.nom}','${req.body.url}',NULL,'${req.body.description}','${req.body.price}`,
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

module.exports = { put, get, remove, post };
