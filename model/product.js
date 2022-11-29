const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, " please enter Product name"],
    },

    brand: {
      type: String,
      required: [true, " please enter Product Brand"],
    },
    desc: {
      type: String,
      required: [true, " please enter Product description"],
    },
    price: {
      type: Number,
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
