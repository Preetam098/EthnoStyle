const Products = require("../models/productSchema");

//CRUD OPERATION

//Get Products
const getProducts = async (req, res) => {
  try {
    const { price, title, category } = req.query;
    const query = {
      ...(price && { price }),
      ...(category && { category: { $regex: category, $options: 'i'} }),
      ...(title && { title: { $regex: title, $options: 'i' } })
    };
    const products = await Products.find(query);
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Create Products
const createProducts = async (req, res) => {
  try {
    const { title, price, description, image, category } = req.body;
    const newProduct = new Products({
      title,
      price,
      description,
      image,
      category,
    });
    await newProduct.save();
    res.status(200).json({ message: "Product Added Successfully" });
  } catch (error) {
    res.status(400).json({ message: "Product Add Failed" });
  }
};

//Update Products
const updateProducts = async (req, res) => {
  try {
    const { title, price, description, image, category, _id } = req.body;
    const existingProduct = await Products.findById(_id);
    if (!existingProduct) {
      return res.status(404).json({ error: "Product not found." });
    } else {
      const updatedProduct = await Products.findByIdAndUpdate(
        _id,
        {
          $set: { title, price, description, image, category },
        },
        { new: true }
      );
      res.json({ message: "Product updated successfully", updatedProduct });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Product Not updated " });
  }
};

//Delete Product
const deleteProduct = async (req, res) => {
  try {
    const { _id } = req.body;
    const productDelete = await Products.findByIdAndDelete({_id});
    if (productDelete) {
      res .status(200) .json({ message: "Product Delete Successfully", productDelete });
      // console.log("Product Delete Successfully");
    } else {
      res.status(400).json({ message: "Product Not Delete" });
      console.log("Product Not Delete");
    }
  } catch (error) {
    res.status(400).json({ message: "Product Delete Failed" });
  }
};

module.exports = { getProducts, createProducts, updateProducts, deleteProduct };
