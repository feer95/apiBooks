const express = require("express");
const cors = require('cors');
const userRouters = require("/Users/Feer/Desktop/CodeN/MOD. 5/retoFinde/back/src/controller/user.controller.js");
const errorHandling = require("/Users/Feer/Desktop/CodeN/MOD. 5/retoFinde/back/src/error/errorHandling.js");


const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(userRouters);

app.use(function(req, res, next) {
  res.status(404).json({
    error: true,
    codido: 404,
    message: "Endpoint not found"
  });
});

app.use(errorHandling);

module.exports = app;