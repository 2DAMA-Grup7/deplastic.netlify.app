function register(req, res) {
  database.query(
    `INSERT INTO Users (USER_ID, username, password, email, roles, token, PointTotal) VALUES (NULL, "${req.body.username}","${req.body.password}","${req.body.email}","${req.body.roles}", "", 0)`,
    function (err, result) {
      send_error(res, err);
    }
  );
}

function token(req, res) {
  var json_send = { auth: false };
  if (req.body.token != undefined) {
    database.query(
      `SELECT * FROM Users WHERE email = "${req.body.email}"`,
      (error, data) => {
        if (error) {
          throw error;
        } else {
          if (data.length > 0) {
            for (var count = 0; count < data.length; count++) {
              if (data[count].token == req.body.token) {
                json_send = { auth: true };
              }
            }
          }
        }
        res.send(JSON.stringify(json_send));
        res.end();
      }
    );
  } else {
    res.send(JSON.stringify(json_send));
    res.end();
  }
}

function login(req, res) {
  var json_send = { auth: false };
  database.query(
    `SELECT * FROM Users WHERE email = "${req.body.email}"`,
    (error, data) => {
      if (error) {
        throw error;
      } else {
        if (data.length > 0) {
          for (var count = 0; count < data.length; count++) {
            if (data[count].password == req.body.password) {
              user = { id: data[count].USER_ID, email: data[count].email };
              let token = jwt.sign({ user }, process.env.my_secret_key);
              json_send = {
                auth: true,
                token: token,
                username: data[count].username,
              };
              database.query(
                `UPDATE Users SET token = "${token}" WHERE USER_ID = "${user.id}"`
              );
            }
          }
        }
      }
      res.send(JSON.stringify(json_send));
      res.end();
    }
  );
}

module.exports = { login, token, register };
