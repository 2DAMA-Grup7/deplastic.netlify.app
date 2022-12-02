function put(req, res) {
  database.query(
    `UPDATE Users SET username='${req.body.username}',password='${req.body.password}', 
    email='${req.body.email}', roles='${req.body.roles}' WHERE USER_ID='${req.body.USER_ID}'`,
    function (err) {
      send_error(res, err);
    }
  );
}

function get(req, res) {
  database.query("SELECT * FROM Users", function (err, result) {
    res.json(result);
  });
}

function remove(req, res) {
  database.query(
    `DELETE FROM Users WHERE USER_ID = "${req.body.USER_ID}" `,
    function (err) {
      send_error(res, err);
    }
  );
}

function post(req, res) {}

module.exports = { put, get, remove, post };
