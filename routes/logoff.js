const express = require("express");
const router = express.Router();

router.delete("/", (req, res) => {
  const { headers, currentUser } = req;

  const indexOfItem = currentUser.tokens.findIndex((item) => {
    return item === headers.token;
  });

  currentUser.tokens.splice(indexOfItem, 1);
  res.send({ status: 1 });
});

module.exports = router;
