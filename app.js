require("dotenv").config();
require("express-async-errors");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorhandler");
const authenticateUser = require("./middleware/auth");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/users", userRoute);
app.use("/api/v1/products", authenticateUser, productRoute);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
        console.log("DB is connected");
      })
      .catch((error) => {
        console.log(error);
      });

    app.listen(process.env.PORT, () => {
      console.log(`app is listening on ${process.env.PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
