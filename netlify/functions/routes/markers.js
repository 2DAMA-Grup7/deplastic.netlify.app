function get(req, res) {
  database.query("SELECT * FROM Markers", function (err, result) {
    res.json(result);
  });
}

function post(req, res) {
  database.query(
    `INSERT INTO Markers (id_marker, name, latitude, longitude, description) VALUES (NULL, "${req.body.name}","${req.body.latitude}","${req.body.longitude}","${req.body.description}")`,
    function (err, result) {
      send_error(res, err);
    }
  );
}

function put(req, res) {
  database.query(
    `UPDATE Markers SET latitude='${req.body.latitude}',longitude='${req.body.longitude}', name='${req.body.name}', 
    description=${req.body.description} WHERE id_marker='${req.body.id_marker}'`,
    function (err, result) {
      send_error(res, err);
    }
  );
}

function remove(req, res) {
  database.query(
    `DELETE FROM Markers WHERE id_marker = "${req.body.id_marker}" `,
    function (err) {
      send_error(res, err);
    }
  );
}

module.exports = { get, post, remove, put };
