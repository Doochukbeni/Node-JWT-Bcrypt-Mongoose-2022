const notFound = (req, res) => {
  res.status(404).send("This Route Does Not Exists");
};

module.exports = notFound;
