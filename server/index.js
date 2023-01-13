const express = require("express");
const app = express();

const { port } = require("./config");

// add datebase
require("./db/mongoose");

// routes
const router = require("./routes/search");
app.use("/api", router);

// server
app.listen(port, () => {});
