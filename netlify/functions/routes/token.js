function token(req, res) {
  let json_send = { auth: false };
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
}

module.exports = token;
