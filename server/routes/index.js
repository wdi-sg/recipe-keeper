const Recipes=require('../controllers/recipe');

module.exports = (app) => {

  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the RecipeKeeper API!',
  }));

  app.get('/recipes', Recipes.listAll);

  app.post('/recipes', Recipes.createNew);

  app.get('/recipes/:id/edit', Recipes.getOne);

  app.put('/recipes/:id', Recipes.updateOne)
  app.delete('/recipes/:id', Recipes.deleteOne)
};