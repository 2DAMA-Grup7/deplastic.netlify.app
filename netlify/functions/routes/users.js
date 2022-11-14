var database = require("../lib/db");
var jwt = require("jsonwebtoken");

function put(req, res) {
  database.query(
    `UPDATE Users username='${req.body.username}',password='${req.body.password}', email='${req.body.newEmail}' WHERE email='${req.body.email}'`,
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
  database.query("SELECT * FROM Users", function (err, result) {
    res.json(result);
  });
}

function remove(req, res) {
  database.query(
    `DELETE * FROM Users WHERE id = "${req.body.id}" `,
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
  let json_send = { auth: false };

  switch (req.body.type) {
    case 0: //Login
      database.query(
        `SELECT * FROM Users WHERE email = "${req.body.email}"`,
        (error, data) => {
          if (error) {
            throw error;
          } else {
            if (data.length > 0) {
              if (data[0].password == req.body.password) {
                user = {
                  id: data[0].USER_ID,
                  email: data[0].email,
                };
                let token = jwt.sign({ user }, process.env.my_secret_key);
                json_send = {
                  auth: true,
                  token: token,
                };
                database.query(
                  `UPDATE Users SET token = "${token}" WHERE USER_ID = "${user.id}"`
                );
              }
            }
          }
          res.send(JSON.stringify(json_send));
          res.end();
        }
      );
      break;

    case 1: //Register
      database.query(
        `INSERT INTO Users 
    VALUES ("", "${req.body.username}", "${req.body.password}", "${req.body.email}", "${req.body.role}", "")"`,
        (err) => {
          if (err) {
            res.send("{ error: true }");
          } else {
            res.send("{ error: false }");
          }
          res.end();
        }
      );

      break;

    case 2: //Verify Token :D
      if (req.body.token != undefined) {
        var database = require("../lib/db");
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
      break;

    default:
      res.send("{ error: true }");
      res.end();
      break;
  }
}

module.exports = { put, get, remove, post };
