const { animalServices } = require("./Animal.Services");

const createAnimal = async (req, res) => {
  try {
    const payload = req.body;

    const result = await animalServices.createAnimalntoDB(payload);
    res.status(200).json({
      success: true,
      message: " created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(error?.statusCode ? error.statusCode : 500).json({
      success: false,
      // error: error,
      message: error?.message ? error.message : "something went wrong",
    });
  }
};

// get userIfo

const getAnimal = async (req, res) => {
  try {
    const result = await animalServices.getAnimalFromDB();
    res.status(200).json({
      success: true,
      message: " retrived successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(error?.statusCode ? error.statusCode : 500).json({
      success: false,
      // error: error,
      message: error?.message ? error.message : "something went wrong",
    });
  }
};
const getFilterAnimal = async (req, res) => {
  try {
    const { categoryId } = req.query;
    console.log(categoryId);
    const result = await animalServices.getFilterAnimalFromDB(categoryId);
    res.status(200).json({
      success: true,
      message: " retrived successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(error?.statusCode ? error.statusCode : 500).json({
      success: false,
      // error: error,
      message: error?.message ? error.message : "something went wrong",
    });
  }
};

// exports

module.exports = {
  animalControllers: {
    createAnimal,
    getAnimal,
    getFilterAnimal,
  },
};
