function put(req, res) {
  database.query(
    `UPDATE Transaccio nom='${req.body.nom}',url='${req.body.url}', description='${req.body.description}', preu='${req.body.preu}' WHERE id='${req.body.id}'`,
    function (err, result) {
      send_error(res, err);
    }
  );
}

function get(req, res) {
  database.query("SELECT * FROM Transaccio", function (err, result) {
    res.json(result);
  });
}

function remove(req, res) {
  database.query(
    `DELETE * FROM Transaccio WHERE nom = "${req.body.nom}" `,
    function (err) {
      send_error(res, err);
    }
  );
}

function post(req, res) {
  database.query(
    `INSERT INTO Transaccio (nom, url, id, description, price) VALUES ('${req.body.nom}','${req.body.url}',NULL,'${req.body.description}','${req.body.price})`,
    function (err, result) {
      send_error(res, err);
    }
  );
}

module.exports = { put, get, remove, post };
