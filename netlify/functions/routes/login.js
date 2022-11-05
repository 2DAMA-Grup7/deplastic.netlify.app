function login(req, res) {
  var database = require("../lib/db");

  function res_send(auth, message) {
    console.log(message);
    res.send(JSON.stringify({ auth: auth }));
  }

  database.query(
    `SELECT * FROM Users WHERE email = "${req.body.email}"`,
    (error, data) => {
      if (data.length > 0) {
        for (var count = 0; count < data.length; count++) {
          if (data[count].password == req.body.password) {
            //req.session.user_id = data[count].user_id;
            res_send(true, "Successful");
          } else {
            res_send(false, "Incorrect Password");
          }
        }
      } else {
        res_send(false, "Incorrect Email Address");
      }
      res.end();
    }
  );
}

module.exports = login;
