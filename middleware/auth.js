module.exports.checkToken = (req, res, next) => {
  const { simpsons, headers } = req;

  // turn back into an array

  //important in case token is not set!
  if (!headers.token) {
    res.send({ status: 0, error: "Token not set!" });
  }

  //find the user
  const indexOfItem = simpsons.findIndex((item) => {
    if (item.tokens === undefined) return;
    return item.tokens.includes(headers.token);
  });

  //check the token
  if (indexOfItem === -1) {
    res.send({ status: 0, error: "Token not valid!" });
    return;
  }

  req.currentUser = simpsons[indexOfItem];

  next();
};
