const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
const users = require("./routes/users");
const markers = require("./routes/markers");


router.post("/user", users.post);

router.get("/user", users.get);

router.delete("/user", users.remove);

router.put("/user", users.put);

/* Deprecated
router.post("/token", require("./routes/token"));
router.post("/login", require("./routes/login"));
*/

router.post("/markers", markers.post);

router.get("/markers", markers.get);

router.delete("/markers", markers.remove);

router.put("/markers", markers.put);

app.use(require("body-parser").json());

app.use("/.netlify/functions/api", router);

exports.handler = serverless(app);
