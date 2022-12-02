function put(req, res) {
  database.query(
    `UPDATE Compras nom='${req.body.nom}',url='${req.body.url}', description='${req.body.description}', preu='${req.body.preu}' WHERE id='${req.body.id}'`,
    function (err, result) {
      send_error(res, err);
    }
  );
}

function get(req, res) {
  database.query("SELECT * FROM Compras", function (err, result) {
    res.json(result);
  });
}

function remove(req, res) {
  database.query(
    `DELETE * FROM Compras WHERE nom = "${req.body.nom}" `,
    function (err) {
      send_error(res, err);
    }
  );
}

function post(req, res) {
  database.query(
    `INSERT INTO Compras (user_email, article, id_buy) VALUES ('${req.body.email}','${req.body.prodId}',NULL)`,
    function (err, result) {
      send_error(res, err);
    }
  );
}

module.exports = { put, get, remove, post };
