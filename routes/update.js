const express = require("express");
const router = express.Router();
const { updateUser } = require("../mysql/queries");

router.put("/", async (req, res) => {
  const { name, email, password } = req.body;

  console.log(updateUser(name, email, password, req.headers.token));
  const result = await req.asyncMySQL(
    updateUser(name, email, password, req.headers.token)
  );

  if (result.affectedRows === 1) {
    res.send({ status: 1 });
  } else {
    res.send({ status: 0, error: "Duplicate entry" });
    return;
  }
});

module.exports = router;
