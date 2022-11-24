const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please enter your username"],
      trim: true,
      unique: true,
    },
    firstname: {
      type: String,
      required: [true, "please enter your firstName"],
    },
    lastname: {
      type: String,
      required: [true, "please enter your lastName"],
    },
    age: {
      type: Number,
      required: [true, "please enter your age"],
    },
    password: {
      type: String,
      required: [true, "please enter a strong password"],
    },
    email: {
      type: String,
      required: [true, "please enter your email"],
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "please enter a valid email",
      ],
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// UserSchema.methods.getName = function () {
//   return this.username;
// };

UserSchema.methods.createJWToken = function () {
  return jwt.sign(
    { userID: this._id, username: this.username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
};

UserSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};
module.exports = mongoose.model("USER", UserSchema);
