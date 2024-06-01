const { Schema, model } = require("mongoose");

const animalSchema = new Schema({
  name: { type: String },
  photo: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
});

const Animal = model("Animal", animalSchema);

module.exports = Animal;
