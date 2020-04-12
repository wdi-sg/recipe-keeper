const express = require('express');
const jsonfile = require('jsonfile');
const path = require('path');

const router = express.Router();

const recipesFile = 'recipes.json';

const recipesController = require('../controllers/recipes');
const ingredientsController = require('../controllers/ingredients');

router.use(express.urlencoded({
    extended: true
}));

router.use('/', express.static(path.join(__dirname, '..', '/public/')));
router.use('/:id', express.static(path.join(__dirname, '..', '/public/')));

router.get('/', ingredientsController.getAllIngredients);

module.exports = router;