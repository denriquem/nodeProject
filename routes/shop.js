const express = require("express");
const rootDir = require("../helpers/path");
const adminData = require("./admin");

const path = require("path");

const router = express.Router();

router.get("/", (req, res, next) => {
	const products = adminData.products;
	res.render("shop", { prods: products, pageTitle: "Shop", path: "/shop" });
});

module.exports = router;
