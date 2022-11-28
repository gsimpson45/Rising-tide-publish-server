const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

router.route("/logIn").post(async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || username == null) {
      res.status(400);
      throw new Error("All fields not entered " + username);
    }
    const userExist = await User.findOne({
      username: username,
      password: password,
    });
    if (userExist) {
      res.json(
        createToken({
          username: username,
          password: password,
        })
      );
      res.status(201);
    } else {
      res.status(401);
      throw new Error("Username and password is incorrect");
    }
  } catch (Error) {
    res.json(Error.message);
  }
});

router.route("/add").post(async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({ username, password, email });

  if (!username || username == null) {
    res.status(400);
    throw new Error("All fields not entered");
  }
  /* res.status(201)
      newUser
      .save()
      */
  const userExist = await User.findOne({ username: username });
  try {
    if (userExist) {
      res.status(400);

      throw new Error("Username is already used");
    }
    if (newUser) {
      res.status(201);
      newUser.save().then(() =>
        res.json(
          createToken({
            username: newUser.username,
            password: newUser.password,
          })
        )
      );
    } else {
      res.status(400);
      throw new Error("user DNE");
    }
  } catch (Error) {
    res.json(Error.message);
  }
});
const createToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET);
};
module.exports = router;
