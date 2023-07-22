const express = require("express");
const RecipeModel = require("../model/recipes.model");
const recipeRouter = express.Router();
const auth = require("../middleware/auth.middleware");
const adminAuth = require("../middleware/adminAuth.middleware");

function formatDate(date) {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
}

/*.................................................................................................... */
//                               Admin Routes + Public routes
/*.................................................................................................... */

// all routes wich are not prtected are only fro admin
// public route to get all recipes fro admin
recipeRouter.get("/", async (req, res) => {
  const { filter, sortBy, q, page, limit } = req.query;
  const query = {};

  // Filter by name
  if (filter && filter.name) {
    query.name = filter.name;
  }

  // Filter by category
  if (filter && filter.category) {
    query.category = filter.category;
  }

  // Filter by course
  if (filter && filter.course) {
    query.course = filter.course;
  }
  // Filter by rating
  if (filter && filter.rating) {
    query.rating = filter.rating;
  }

  // Search by movie name
  if (q) {
    query.name = { $regex: q, $options: "i" };
  }

  // Sorting
  const sort = sortBy ? { [sortBy]: 1 } : {};

  // Pagination
  const pageNumber = parseInt(page) || 1;
  const pageSize = parseInt(limit) || 10;
  const skip = (pageNumber - 1) * pageSize;

  try {
    const recipes = await RecipeModel.find(query)
      .sort(sort)
      .skip(skip)
      .limit(pageSize);
    const totalCount = await RecipeModel.countDocuments();
    res.status(200).json({ Messsage: "All Recipes", recipes, totalCount });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// single recipes route from the public route
recipeRouter.get("/:recipeID", async (req, res) => {
  const { recipeID } = req.params.recipeID;
  try {
    const recipe = await RecipeModel.findOne(recipeID);
    // console.log(recipe);
    if (recipe) {
      return res.status(200).json({ Messsage: "Recipe", recipe });
    } else {
      return res.status(404).json({ msg: `recipe not found...!!` });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// public route deleting the recipe from database for the admin
recipeRouter.delete("/:recipeID", adminAuth, async (req, res) => {
  const { recipeID } = req.params;
  const recipe = await RecipeModel.findOne({ _id: recipeID });
  try {
    if (recipe) {
      const deletedRecipe = await RecipeModel.findByIdAndDelete({
        _id: recipeID,
      });
      return res.status(200).json({ msg: "Recipe deleted", deletedRecipe });
    } else {
      return res.status(404).json({ msg: `recipe not found...!!` });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*.................................................................................................... */
//                              User Routes with Authentication
/*.................................................................................................... */

// saved recipe for perticular user
recipeRouter.get("/my-recipes", auth, async (req, res) => {
  const { filter, sortBy, q, page, limit } = req.query;
  const query = {};
  query.createdBy = String(req.body.userID);
  // Filter by name
  if (filter && filter.name) {
    query.name = filter.name;
  }

  // Filter by category
  if (filter && filter.category) {
    query.category = filter.category;
  }

  // Filter by course
  if (filter && filter.course) {
    query.course = filter.course;
  }
  // Filter by rating
  if (filter && filter.rating) {
    query.rating = filter.rating;
  }

  // Search by movie name
  if (q) {
    query.name = { $regex: q, $options: "i" };
  }

  // Sorting
  const sort = sortBy ? { [sortBy]: 1 } : {};

  // Pagination
  const pageNumber = parseInt(page) || 1;
  const pageSize = parseInt(limit) || 10;
  const skip = (pageNumber - 1) * pageSize;

  try {
    const recipes = await RecipeModel.find(query)
      .sort(sort)
      .skip(skip)
      .limit(pageSize);
    const totalCount = await RecipeModel.countDocuments();
    res.status(200).json({ Messsage: "My Recipes", recipes, totalCount });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// user can create his/her recipe
recipeRouter.post("/", auth, async (req, res) => {
  try {
    // Extract the request data
    const {
      images,
      video,
      name,
      category,
      ingredients,
      directions,
      course,
      timeRequired,
      calories,
      fat,
      carbs,
      proteins,
    } = req.body;

    const nutrients = {
      calories,
      fat,
      carbs,
      proteins,
    };
    const createdBy = req.body.userID;
    const username = req.body.username;
    const newRecipeData = {
      images,
      video,
      name,
      category,
      ingredients,
      directions,
      course,
      rating: 0,
      timeRequired,
      nutrients,
      like: [], // Empty array for 'like'
      comment: [], // Empty array for 'comment'
      review: 0, // Default value for 'review'
      createdAt: formatDate(Date.now()), // Current date and time in string format
      createdBy,
      username,
    };
    const newRecipe = await RecipeModel(newRecipeData);
    await newRecipe.save();
    return res.status(200).json({ msg: "New recipe added", newRecipe });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// user can update hos won recipe
recipeRouter.patch("/:recipeID", auth, async (req, res) => {
  const { recipeID } = req.params;
  const { userID } = req.body;
  const recipe = await RecipeModel.findOne({ _id: recipeID });

  try {
    if (recipe) {
      if (userID === String(recipe.createdBy)) {
        const updatedRecipe = await RecipeModel.findByIdAndUpdate(
          { _id: recipeID },
          req.body,
          { new: true }
        );
        return res.status(200).json({ msg: "Recipe updated", updatedRecipe });
      } else {
        return res
          .status(201)
          .json({ msg: "not authorised to do this operation" });
      }
    } else {
      return res.status(404).json({ msg: `recipe not found...!!` });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// user can delete hos won recipe
recipeRouter.delete("/:recipeID", auth, async (req, res) => {
  const { recipeID } = req.params;
  const { userID } = req.body;
  const recipe = await RecipeModel.findOne({ _id: recipeID });
  try {
    if (recipe) {
      if (userID === String(recipe.createdBy)) {
        const deletedRecipe = await RecipeModel.findByIdAndDelete({
          _id: recipeID,
        });
        return res.status(200).json({ msg: "Recipe deleted", deletedRecipe });
      } else {
        return res
          .status(201)
          .json({ msg: "not authorised to do this operation" });
      }
    } else {
      return res.status(404).json({ msg: `recipe not found...!!` });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// like a recipe
recipeRouter.patch("/like/:recipeID", auth, async (req, res) => {
  const recipeID = req.params.recipeID;
  try {
    const recipe = await RecipeModel.findById({ _id: recipeID });
    const index = recipe.like.findIndex((id) => {
      return id === String(req.body.userID);
    });

    if (index == -1) {
      recipe.like.push(req.body.userID);
    } else {
      recipe.like = recipe.like.filter((id) => id !== String(req.body.userID));
    }
    const updatedRecipe = await RecipeModel.findByIdAndUpdate(
      { _id: recipeID },
      recipe,
      {
        new: true,
      }
    );
    return res.status(200).json({ updatedRecipe });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// comment on recipe
recipeRouter.patch("/comment/:recipeID", auth, async (req, res) => {
  const recipeID = req.params.recipeID;
  try {
    const recipe = await RecipeModel.findById(recipeID);
    recipe.comment.push({
      username: req.body.username,
      comment: req.body.comment,
    });
    await RecipeModel.findByIdAndUpdate({ _id: recipeID }, recipe, {
      new: true,
    });
    return res.status(200).json({ recipe });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = recipeRouter;
