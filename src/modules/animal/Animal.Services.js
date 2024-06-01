const { default: mongoose } = require("mongoose");
const Animal = require("./Animal.Model");

const createAnimalntoDB = async (payload) => {
  const result = await Animal.create(payload);
  return result;
};

// get

const getAnimalFromDB = async () => {
  const result = await Animal.findOne();
  return result;
};

// filter product by category

const getFilterAnimalFromDB = async (id) => {
  const result = await Animal.findOne({
    category: id,
  });

  return result;
};

// exporst
module.exports = {
  animalServices: {
    createAnimalntoDB,
    getAnimalFromDB,
    getFilterAnimalFromDB,
  },
};
