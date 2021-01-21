const express = require("express");
const rootDir = require("../helpers/path");
const adminData = require("./admin");

const path = require("path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop");
});

module.exports = router;
