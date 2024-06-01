const { categoryServices } = require("./category.Services");

const createCategory = async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload, "payload");

    const result = await categoryServices.createCategoryntoDB(payload);
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

const getCategory = async (req, res) => {
  try {
    const result = await categoryServices.getCategoryFromDB();
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
  categoryControllers: {
    createCategory,
    getCategory,
  },
};
