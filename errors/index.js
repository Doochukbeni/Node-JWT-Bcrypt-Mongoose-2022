const BadRequest = require("./bad-request");
const Unauthenticated = require("./unauthenticated");
const CustomAPIError = require("./customAPIErrors");
const NotFoundError = require("./not-found");

module.exports = { BadRequest, Unauthenticated, CustomAPIError, NotFoundError };
