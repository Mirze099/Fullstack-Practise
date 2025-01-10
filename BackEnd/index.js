const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
let mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(cors());

dotenv.config();

app.get("/", (req, res) => {
  res.send("Welcome Node");
});

let ProductSchema = new mongoose.Schema({
  country: String,
  title: String,
  description: String,
  image: String,
});

let ProductModel = mongoose.model("product", ProductSchema);

app.get("/product", async (req, res) => {
  let product = await ProductModel.find();
  res.send(product);
});

app.get("/product/:id", async (req, res) => {
  let id = req.params.id;
  let myproduct = await ProductModel.findById();
  res.send({
    message: "Succes GetById",
    data: myproduct,
  });
});

app.post("/product", async (req, res) => {
  let newProduct = ProductModel(req.body);
  await newProduct.save();
  res.send({
    message: "Success Post",
    data: req.body,
  });
});

app.delete("/product/:id", async (req, res) => {
  let { id } = req.params;
  await ProductModel.findByIdAndDelete(id);
  res.send({
    message: "Success Delete",
  });
});

mongoose
  .connect(
    "mongodb+srv://mirzarmaf206:mirzeyev2005@fullstackpractise1.1les2.mongodb.net/"
  )
  .then(() => {
    console.log("connected");
  });

app.listen(3000, () => {
  console.log("bu app 3000 portunda dinlenilir");
});
