const express = require("express");
const router = express.Router();
const Product = require("../models/productmodels");

module.exports = router;


router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (err) {
    res.status(500).send({ error: "Error fetching products" });
  }
});


router.post("/products", async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      title: req.body.title,
      image: req.body.image,
      link: req.body.link,
    });
    await product.save();
    res.send(product);
  } catch (err) {
    res.status(500).send({ error: "Error creating product" });
  }
});

router.put("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send({ error: "Product not found" });
    }

    product.name = req.body.name;
    product.title = req.body.title;
    product.image = req.body.image;
    product.link = req.body.link;

    await product.save();
    res.send(product);
  } catch (err) {
    res.status(500).send({ error: "Error updating product" });
  }
});


router.delete("/products/:id", async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch (err) {
    res.status(404).send({ error: "Product doesn't exist!" });
  }
});
