const express = require("express");
const { animalControllers } = require("./Animal.controller");

const router = express.Router();

router.post("/", animalControllers.createAnimal);

router.get("/", animalControllers.getAnimal);
router.get("/filter-animal", animalControllers.getFilterAnimal);

// exports
module.exports = {
  animalRoutes: router,
};
