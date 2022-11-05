const express = require("express");
const serverless = require("serverless-http");
const mysql = require("mysql2");

const app = express();
const router = express.Router();

const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  database: process.env.database,
  password: process.env.password,
});

router.get("/markers", (req, res) => {
  connection.query("SELECT * FROM Markers", function (err, result) {
    res.json(result);
  });
});

app.use("/.netlify/functions/api", router);

exports.handler = serverless(app);
