const { default: mongoose } = require("mongoose");
const Animal = require("./Animal.Model");

const createAnimalntoDB = async (payload) => {
  const result = await Animal.create(payload);
  return result;
};

// get

const getAnimalFromDB = async () => {
  const result = await Animal.find();
  return result;
};

// filter product by category

const getFilterAnimalFromDB = async (categoryId) => {
  const categoryObjectId = new mongoose.Types.ObjectId(categoryId);

  // Find animals with the given category
  const result = await Animal.find({ category: categoryObjectId });

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
