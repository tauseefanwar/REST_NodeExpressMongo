const express = require("express");
const http = require("http");
const mongoose = require("mongoose")
const testrouter = require("./router/routes");

const app = express();

app.use("/test", testrouter);

app.listen(9000, () => {
  console.log("port 9000");
});
