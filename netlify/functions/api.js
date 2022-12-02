const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

global.jwt = require("jsonwebtoken");
global.json_send = { auth: false };
global.database = require("./lib/db");
global.send_error = require("./lib/send_error");

const users = require("./routes/users");
const auth = require("./routes/auth");
const markers = require("./routes/markers");
const products = require("./routes/products");
const transaction = require("./routes/transaction");
const receipt = require("./routes/receipt");

// Receipt Rutes
router.post("/receipt", receipt.post);
router.get("/receipt", receipt.get);

// Transaction Rutes
router.get("/transaction", transaction.get);

// User Rutes
router.get("/user", users.get);
router.delete("/user", users.remove);
router.put("/user", users.put);

// Auth Rutes
router.post("/register", auth.register);
router.post("/login", auth.login);
router.post("/token", auth.token);

// Products Rutes
router.post("/products", products.post);
router.get("/products", products.get);
router.delete("/products", products.remove);
router.put("/products", products.put);

// Markers Rutes
router.post("/markers", markers.post);
router.get("/markers", markers.get);
router.delete("/markers", markers.remove);
router.put("/markers", markers.put);

// apply body parser
app.use(require("body-parser").json());

app.use("/.netlify/functions/api", router);

exports.handler = serverless(app);
