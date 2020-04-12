const express = require('express');
const jsonfile = require('jsonfile');
const path = require('path');

const router = express.Router();

const recipesFile = 'recipes.json';

const recipesController = require('../controllers/recipes');

const dateUtility = require('../util/get-date');

router.use(express.urlencoded({
    extended: true
}));

router.use('/', express.static(path.join(__dirname, '..', '/public/')));
router.use('/:id', express.static(path.join(__dirname, '..', '/public/')));

//

router.get('/new', recipesController.getAddRecipe);

router.post('/', recipesController.postAddRecipe);

router.get('/:id/edit', recipesController.getEditRecipeById);

router.get('/:id/delete', recipesController.getDeleteRecipeById);

router.get('/reset', recipesController.getResetRecipes);

router.get('/:id', recipesController.getRecipeById);

router.put('/:id', recipesController.putRecipeById);

router.get('/', recipesController.getShowAllRecipes);

module.exports = router;