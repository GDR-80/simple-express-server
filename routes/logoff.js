const express = require("express");
const { removeToken } = require("../mysql/queries");
const router = express.Router();

<<<<<<< HEAD
router.delete("/", (req, res) => {
  const { headers, currentUser } = req;

  const indexOfItem = currentUser.tokens.findIndex((item) => {
    return item === headers.token;
  });
=======
router.delete("/", async (req, res) => {
  await req.asyncMySQL(removeToken(req.headers.token));
>>>>>>> 53e67de417fde6f3930d557bee69763405c46b75

  currentUser.tokens.splice(indexOfItem, 1);
  res.send({ status: 1 });
});

module.exports = router;
