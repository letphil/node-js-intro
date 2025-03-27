// require express library
const express = require("express");
const path = require("path");

const PORT = 8888;

const app = express(); // initializing express inside of app variable

app.use(express.static(path.join(__dirname, "public")));

/**
 * @description: health check to see if server is running
 */
app.get("/ping", function (req, res) {
  return res.send("pong");
});

app.get("/get-info", function (req, res) {
  console.log("request getinfo");
  res.status(200).send({
    name: "phil",
    age: 36,
    skills: "cooking",
  });
});

app.listen(PORT, function () {
  console.log("server running at port:", PORT);
});
