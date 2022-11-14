var database = require("../lib/db");

function put(req, res){
  database.query(`UPDATE Users username='${req.body.username}',password='${req.body.password}', email='${req.body.newEmail}' WHERE email='${req.body.email}'`, function (err, result) {
    if (err) {
      res.send("{ error: true }");
    } else {
      res.send("{ error: false }");
    }
    res.end();
  }
);
}

function get(req, res){
  database.query("SELECT * FROM Users", function (err, result) {
    res.json(result);
  });
}

function remove(req, res){
  database.query(`DELETE * FROM Users WHERE id = "${req.body.id}" `, function (err) {
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
}

module.exports = {put, get, remove, post};
