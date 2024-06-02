const { default: mongoose } = require("mongoose");
const Animal = require("./Animal.Model");

const createAnimalntoDB = async (payload) => {
  const result = await Animal.create(payload);
  return result;
};

// get

const getAnimalFromDB = async (categoryId) => {
  // console.log(categoryId);

  if (categoryId) {
    const categoryObjectId = new mongoose.Types.ObjectId(categoryId);

    // Find animals with the given category
    const result = await Animal.find({ category: categoryObjectId });
    return result;
  }
  // If categoryId is not provided, fetch all animals
  const result = await Animal.find();
  return result;
};

// exporst
module.exports = {
  animalServices: {
    createAnimalntoDB,
    getAnimalFromDB,
  },
};
