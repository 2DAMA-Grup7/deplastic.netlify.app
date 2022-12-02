function get(req, res) {
  database.query("SELECT * FROM Productes", function (err, result) {
    res.json(result);
  });
}

function post(req, res) {
  database.query(
    `INSERT INTO Productes (nom, url, id, description, price) VALUES ("${req.body.nom}","${req.body.url}",NULL,"${req.body.description}","${req.body.price}")`,
    function (err) {
      send_error(res, err);
    }
  );
}

function put(req, res) {
  database.query(
    `UPDATE Productes SET url='${req.body.url}',description='${req.body.description}', nom='${req.body.nom}', 
    price=${req.body.price} WHERE id='${req.body.id}'`,
    function (err) {
      send_error(res, err);
    }
  );
}

function remove(req, res) {
  database.query(
    `DELETE FROM Productes WHERE id = "${req.body.id}" `,
    function (err) {
      send_error(res, err);
    }
  );
}

module.exports = { put, get, remove, post };
