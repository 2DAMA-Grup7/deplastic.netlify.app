function put(req, res) {
  var database = require("../lib/db");
  database.query(
    `UPDATE Users SET username='${req.body.username}',password='${req.body.password}', email='${req.body.newEmail}', roles='${req.body.roles}' WHERE email='${req.body.email}'`,
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

function get(req, res) {
  var database = require("../lib/db");
  database.query("SELECT * FROM Users", function (err, result) {
    res.json(result);
  });
}

function remove(req, res) {
  var database = require("../lib/db");
  database.query(`DELETE FROM Users WHERE email = "${req.body.email}" `, function (err) {
    if (err) {
      res.send(JSON.stringify({ success: false }));
    } else {
      res.send(JSON.stringify({ success: true }));
    }
    res.end();
  });
}

function post(req, res) {}

module.exports = { put, get, remove, post };
