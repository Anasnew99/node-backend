const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const staticFolder = path.join(__dirname, "build");

app.use("/", express.static(staticFolder));

// Fallback

app.get("/", function (req, res) {
  res.send("Fail to get front folder");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});