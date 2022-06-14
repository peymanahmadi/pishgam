const mongoose = require("mongoose");
const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");

const Category = require("../models/category");
const User = require("../models/User");

const getCategories = async (req, res, next) => {
  let categories;
  try {
    categories = await Category.find({});
  } catch (err) {
    const errors = new HttpError(
      "Fetching categories failed, please try again later.",
      500
    );
    return next(error);
  }

  res.json({
    categories: categories.map((category) =>
      category.toObject({ getters: true })
    ),
  });
};

const getCategoryByID = async (req, res, next) => {
  const categoryID = req.params.cid;
  let category;
  try {
    category = await Category.findById(categoryID);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a category",
      500
    );
    return next(error);
  }

  if (!category) {
    const error = new HttpError(
      "Could not find a category for the provided ID",
      404
    );
    return next(error);
  }

  res.json({ category: category.toObject({ getters: true }) });
};

const getCategoryByUserID = async (req, res, next) => {
  const userID = req.params.uid;

  let categories;
  try {
    categories = await Category.find({ users: userID });
  } catch (err) {
    const error = new HttpError(
      "Fetching things failed, please try again later",
      500
    );
    return next(error);
  }

  if (!categories || categories.length === 0) {
    return next(
      new HttpError("Could not find categories for the provided user id.", 404)
    );
  }

  res.json({
    categories: categories.map((category) =>
      category.toObject({ getters: true })
    ),
  });
};

const createCategory = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data", 422)
    );
  }

  const { title, description, creator } = req.body;

  const createdCategory = new Category({
    title,
    description,
    users: [],
    things: [],
    creator,
  });

  let user;
  try {
    user = await User.findById(creator);
  } catch (err) {
    const error = new HttpError(
      "Creating category failed, please login with a valid user",
      500
    );
    return next(error);
  }

  if (!user) {
    const error = new HttpError("Could not find user for provided id", 404);
    return next(error);
  }

  createdCategory.users = creator;

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdCategory.save({ session: sess });
    user.categories.push(createdCategory);
    await user.save({ session: sess });
    sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Creating category failed, please try again." + err + " ",
      500
    );
    return next(error);
  }

  res.status(201).json({ category: createdCategory });
};

const updateCategory = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { title, description, users, things } = req.body;
  const cid = req.params.cid;

  let category;
  try {
    category = await Category.findById(cid);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update category.",
      500
    );
    return next(error);
  }

  category.title = title;
  category.description = description;
  category.users = users;
  category.things = things;

  try {
    category = await category.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update category.",
      500
    );
    return next(error);
  }

  res.status(200).json({ category: category.toObject({ getters: true }) });
};

const deleteCategory = async (req, res, next) => {
  const cid = req.params.cid;

  let category;
  try {
    await Category.findById(cid);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete category.",
      500
    );
    return next(error);
  }

  try {
    await category.remove();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete category.",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "Deleted category." });
};

exports.getCategories = getCategories;
exports.getCategoryByID = getCategoryByID;
exports.getCategoryByUserID = getCategoryByUserID;
exports.createCategory = createCategory;
exports.updateCategory = updateCategory;
exports.deleteCategory = deleteCategory;
