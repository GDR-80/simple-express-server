const express = require("express");
const { getUser } = require("../mysql/queries");
const router = express.Router();

router.get("/", async (req, res) => {
  const results = await req.asyncMySQL(getUser(req.headers.token));

  if (results.length === 0) {
    res.send({ status: 0, error: "User not found" });
    return;
  }

  // //if a search filter the results
  // let filtered = _simpsons;
  // if (search) {
  //   filtered = filtered.filter((item) => {
  //     return item.character.toLowerCase().includes(search);
  //   });
  // }

  // //check if a count and chop the array down
  // if (
  //   count &&
  //   count > 0 &&
  //   typeof count === "number" &&
  //   count <= _simpsons.length
  // ) {
  //   _simpsons.length = count;

  // console.log(req.simpsons);
  // }

  // req.currentUser = results[0];
  // console.log(req.currentUser);

  res.send({ status: 1, result: results[0] });
});

module.exports = router;
