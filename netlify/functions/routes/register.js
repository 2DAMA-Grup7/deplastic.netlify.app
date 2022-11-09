function register(req, res) {
  var database = require("../lib/db");

  database.query(
    `INSERT INTO Users 
  VALUES ("", "${req.body.username}", "${req.body.password}", "${req.body.email}", "${req.body.role}", "")"`,
    (error) => {
      if (error) {
        res.send("{ error: true }");
      } else {
        res.send("{ error: false }");
      }
      res.end();
    }
  );
}

module.exports = register;
