const express = require("express");
const RecipeModel = require("../model/recipes.model");
const recipeRouter = express.Router();
const auth = require("../middleware/auth.middleware");

recipeRouter.get("/", async (req, res) => {
  try {
    const recipes = await RecipeModel.find();
    return res.status(200).json({ recipes });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

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

recipeRouter.patch("/comment/:recipeID", auth, async (req, res) => {
  const recipeID = req.params.recipeID;
  try {
    const recipe = await RecipeModel.findById(recipeID);
    recipe.comment.push({
      userID: req.body.userID,
      username: req.body.username,
      comment: req.body.comment,
    });
    return res.status(200).json({ updatedRecipe });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = recipeRouter;
