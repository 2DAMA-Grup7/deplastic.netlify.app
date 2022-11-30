const express = require("express");
const serverless = require("serverless-http");
const app = express();

const router = express.Router();
const users = require("./routes/users");
const auth = require("./routes/auth");
const markers = require("./routes/markers");
const products = require("./routes/products");
const transaccion = require("./routes/transaccion");

router.get("/transaccion", transaccion.get);

//router.post("/user", users.post);
router.get("/user", users.get);
router.delete("/user", users.remove);
router.put("/user", users.put);

router.post("/register", auth.register);
router.post("/login", auth.login);
router.post("/token", auth.token);

router.post("/products", products.post);
router.get("/products", products.get);
router.delete("/products", products.remove);
router.put("/products", products.put);

router.post("/markers", markers.post);
router.get("/markers", markers.get);
router.delete("/markers", markers.remove);
router.put("/markers", markers.put);

app.use(require("body-parser").json());

app.use("/.netlify/functions/api", router);

exports.handler = serverless(app);
