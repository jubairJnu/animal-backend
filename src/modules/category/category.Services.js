const Category = require("./category.Model");

const createCategoryntoDB = async (payload) => {
  const result = await Category.create(payload);
  return result;
};

// get

const getCategoryFromDB = async () => {
  const result = await Category.findOne();
  return result;
};

// exporst
module.exports = {
  categoryServices: {
    createCategoryntoDB,
    getCategoryFromDB,
  },
};
