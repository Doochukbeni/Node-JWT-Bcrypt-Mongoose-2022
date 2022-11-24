const User = require("../model/user");
const { BadRequest, Unauthenticated } = require("../errors");

const { StatusCodes } = require("http-status-codes");

const registerUser = async (req, res) => {
  const newUser = await User.create({ ...req.body });
  const token = newUser.createJWToken();

  res.status(StatusCodes.CREATED).json({ name: newUser.username, token });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequest("please enter your email and password");
    // return res.status(401).send("please enter your email and password");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new Unauthenticated(`there is no user with this ${email}`);
  }
  //COMPARE PASSWORD
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new Unauthenticated(`incorrect password please try again`);
  }
  const token = user.createJWToken();

  res.status(StatusCodes.OK).json({ name: user.username, token });
};

const allUser = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.status(200).json({ nbht: allUsers.length, allUsers });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getSingleUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await User.findOne({ _id: userID });
    if (!user) {
      return res.status(404).json({ msg: `no user with ${userID}` });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id: userID } = req.params;

    const singleUser = await User.findOneAndDelete({ _id: userID });
    if (!singleUser) {
      return res
        .status(404)
        .json({ success: false, msg: `no user with this ID ${userID}` });
    }
    res.status(200).json({ success: true, data: "user deleted" });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const updated = await User.findOneAndUpdate({ _id: userID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res
        .status(404)
        .json({ success: false, msg: `no user with this ID ${userID}` });
    }
    res.status(200).json({ updated });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  registerUser,
  loginUser,
  allUser,
  deleteUser,
  getSingleUser,
  updateUser,
};
