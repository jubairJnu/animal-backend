const express = require("express");

const app = express();
const cors = require("cors");

const { default: mongoose } = require("mongoose");
const { animalRoutes } = require("./src/modules/animal/Animal.Routes");
const { categoryRoutes } = require("./src/modules/category/category.Routes");

require("dotenv").config();

const port = 5000;

app.use(
  cors({
    origin: ["http://localhost:3000", "https://animal-frontend.vercel.app"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Explicitly handle preflight requests
app.options("*", cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
const url = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.d8yzbln.mongodb.net/TaskAnimal?retryWrites=true&w=majority&appName=Cluster0`;
async function main() {
  try {
    await mongoose.connect(url);

    console.log("Connected to MongoDB with Mongoose");

    app.use("/animals", animalRoutes);
    app.use("/categories", categoryRoutes);

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
