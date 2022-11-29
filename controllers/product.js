const Product = require("../model/product");
const { BadRequest, Unauthenticated, NotFoundError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  req.body.createdBy = req.user.userID;
  const newProduct = await Product.create(req.body);

  res.status(StatusCodes.CREATED).json({ newProduct });
};
const getAllProduct = async (req, res) => {
  const allProduct = await Product.find({
    createdBy: req.user.userID,
  })
    .sort("createdAt")
    .select("-desc");

  res.status(200).json({ nbhits: allProduct.length, allProduct });
};
const updateProduct = async (req, res) => {
  const {
    body: {},
    user: { userID },
    params: { id: productID },
  } = req;

  const product = await Product.findByIdAndUpdate(
    {
      _id: productID,
      createdBy: userID,
    },
    req.body,
    { new: true, runValidators: true }
  );
  if (!product) {
    throw new NotFoundError(`no product with this id ${productID}`);
  }
  res.status(StatusCodes.OK).json({ product });
};

const deleteProduct = async (req, res) => {
  const {
    user: { userID },
    params: { id: productID },
  } = req;

  const product = await Product.findByIdAndDelete({
    _id: productID,
    createdBy: userID,
  });
  if (!product) {
    throw new NotFoundError(`no product with this id ${productID}`);
  }
  res.status(StatusCodes.OK).json({ product });
};

const getSingleProduct = async (req, res) => {
  const {
    user: { userID },
    params: { id: productID },
  } = req;

  const product = await Product.findOne({
    _id: productID,
    createdBy: userID,
  });
  if (!product) {
    throw new NotFoundError(`no product with this id ${productID}`);
  }
  res.status(StatusCodes.OK).json({ product });
};

module.exports = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
