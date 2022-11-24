const jwt = require("jsonwebtoken");
const User = require("../model/user");
const { Unauthenticated } = require("../errors");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Unauthenticated("Invalid Authentication");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // ATTACH USER TO THE ROUTE
    req.user = { userID: payload.userID, username: payload.username };
    next();
  } catch (error) {
    throw new Unauthenticated("not authorized to access this route");
  }
};

module.exports = authMiddleware;
