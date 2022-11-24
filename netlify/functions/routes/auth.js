function register(req, res) {
  var database = require("../lib/db");
  database.query(
    `INSERT INTO Users (USER_ID, username, password, email, roles, token) VALUES (NULL, "${req.body.username}","${req.body.password}","${req.body.email}","${req.body.roles}", "")`,
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

function token(req, res) {
  var database = require("../lib/db");
  let json_send = { auth: false };
  if (req.body.token != undefined) {
    var database = require("../lib/db");
    database.query(`SELECT * FROM Users WHERE email = "${req.body.email}"`, (error, data) => {
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
    });
  } else {
    res.send(JSON.stringify(json_send));
    res.end();
  }
}

function login(req, res) {
  var database = require("../lib/db");
  var jwt = require("jsonwebtoken");
  let json_send = { auth: false };

  //console.log(JSON.stringify(req.body.email));

  database.query(`SELECT * FROM Users WHERE email = "${req.body.email}"`, (error, data) => {
    if (error) {
      throw error;
    } else {
      if (data.length > 0) {
        for (var count = 0; count < data.length; count++) {
          console.log("dada4");
          if (data[count].password == req.body.password) {
            user = { id: data[count].USER_ID, email: data[count].email };
            let token = jwt.sign({ user }, process.env.my_secret_key);
            json_send = { auth: true, token: token, username: data[count].username };
            database.query(`UPDATE Users SET token = "${token}" WHERE USER_ID = "${user.id}"`);
          }
        }
      }
    }
    res.send(JSON.stringify(json_send));
    res.end();
  });
}

module.exports = { login, token, register };
