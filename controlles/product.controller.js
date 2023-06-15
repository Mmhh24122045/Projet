const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

exports.getOneProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.send(product);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

exports.addProducts = async (req, res) => {
  const {title,description,imageUrl,category,quantity}= req.body
  try {
    const newProduct = new Product({
      title,
      description,
      imageUrl,
      category,
      quantity
    });
    await newProduct.save();
    res.send(newProduct);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

exports.deleteProducts = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    // res.send({msg: `${deletedProduct.title} was successfully deleted`});
    res.send(deletedProduct);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

exports.editProducts = async (req, res) => {
  try {
    const editedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.send(editedProduct);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};
