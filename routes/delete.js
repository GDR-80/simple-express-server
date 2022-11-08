const express = require("express");
const { deleteUser, getUser } = require("../mysql/queries");
const router = express.Router();

router.delete("/", async (req, res) => {
  console.log(deleteUser(req.headers.token));
  if (req.headers.token) {
    await req.asyncMySQL(deleteUser(req.headers.token));
    res.send({ status: 1 });
    return;
  }

  res.send({ status: 0, error: "error while trying to delete" });
});

module.exports = router;
