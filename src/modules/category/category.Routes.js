const express = require("express");
const { categoryControllers } = require("./category.controller");

const router = express.Router();

router.post("/", categoryControllers.createCategory);

router.get("/", categoryControllers.getCategory);

// exports
module.exports = {
  categoryRoutes: router,
};
