const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const staticFolder = path.join(__dirname, "..", "react-frontend", "build");

app.use("/", express.static(staticFolder));

app.get("/", function (req, res) {
  res.send("Fail to get build folder");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
