const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

router.post("/token", require("./routes/token"));

router.post("/register", require("./routes/register"));

router.post("/login", require("./routes/login"));

router.get("/markers", require("./routes/markers"));

app.use(require("body-parser").json());

app.use("/.netlify/functions/api", router);

exports.handler = serverless(app);
