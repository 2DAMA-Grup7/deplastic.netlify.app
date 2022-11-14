const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
const users = require("./routes/users");


router.post("/user", users.post);

router.get("/user", users.get);

router.delete("/user", users.remove);

router.put("/user", users.put);

// TODO

router.post("/token", require("./routes/token"));

router.post("/login", require("./routes/login"));

//

router.get("/markers", require("./routes/markers"));

app.use(require("body-parser").json());

app.use("/.netlify/functions/api", router);

exports.handler = serverless(app);
