const User = require("../models/User");
const { BadRequestError, UnAuthenticatedError } = require("../errors/index");

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    const error = new BadRequestError("Please provide all values");
    return next(error);
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    const error = new BadRequestError("Email already in use");
    return next(error);
  }

  try {
    const user = await User.create({ name, email, password });
    const token = user.createJWT();
    res
      .status(201)
      .json({ user: { name: user.name, email: user.email }, token });
  } catch (err) {
    const error = new Error(err);
    return next(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    const error = new BadRequestError("Please provide all values");
    return next(error);
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    const error = new UnAuthenticatedError("Invalid Credentials");
    return next(error);
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    const error = new UnAuthenticatedError("Invalid Credentials");
    return next(error);
  }

  const token = user.createJWT();
  user.password = undefined;
  res.status(200).json({ user, token });
};

const updateUser = async (req, res) => {
  res.send("updateUser user");
};

module.exports = { register, login, updateUser };
