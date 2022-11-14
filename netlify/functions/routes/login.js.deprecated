function login(req, res) {
  var database = require("../lib/db");
  var jwt = require("jsonwebtoken");
  let json_send = { auth: false };

  database.query(
    `SELECT * FROM Users WHERE email = "${req.body.email}"`,
    (error, data) => {
      if (error) {
        throw error;
      } else {
        if (data.length > 0) {
          for (var count = 0; count < data.length; count++) {
            if (
              data[count].password == req.body.password &&
              data[count].roles == "admin"
            ) {
              user = {
                id: data[count].USER_ID,
                email: data[count].email,
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
      }
      res.send(JSON.stringify(json_send));
      res.end();
    }
  );
}

module.exports = login;
