const express = require('express');
const router = express.Router();

const jsonfile = require('jsonfile');
const file = 'data.json';

router.get('/new', (req, res) => {
	res.render('newRecipe');
})


router.post('/newRecipe', (req, res) => {

  //debug code (output request body)

  jsonfile.readFile(file, (err, obj) => {

    newRecipe = {
            "id":  obj.recipes.length+1,
            "title": req.body.title,
            "ingredients": req.body.ingredients,
            "instructions": req.body.instructions,
          };

          obj.recipes.push(newRecipe);

  jsonfile.writeFile(file, obj, (err) => {
    console.error(err);
    res.render('success');
    });
  });
});

router.get('/success', (req, res) => {
	res.render('success');
})

// router.put('edit/:id', (req, res) => {
// 	//look up the recipe
// 	//if not existing, return 404
// 	const recipe = recipes.find(c => c.id === parseInt(req.params.id));
// 	if (!recipe) return res.status(404).send('The recipe with the given ID was not found');

// 	//validate
// 	//If invalid, return 400 - bad request

// 	const { error } = validateRecipe(req.body);
// 	if (error) return res.status(400).send(error.details[0].message);

// 	// Update recipe
// 	recipe.name = req.body.name;
// 	// Return the updated recipe
// 	res.send(recipe);
// })



router.get('/edit/:id', (req, res) => {

	jsonfile.readFile(file, (err, obj) => {

		const recipe = obj.recipes.find(c => c.id === parseInt(req.params.id));
		if (!recipe) return res.status(404).send('The recipe with the given ID was not found');
		res.render('editRecipe', recipe);

	})
})

router.post('/updated/:id', (req, res) => {

  //debug code (output request body)

  jsonfile.readFile(file, (err, obj) => {

  	let updateRecipe =  obj.recipes[req.params.id-1];

    updateRecipe.title= req.body.title;
    updateRecipe.ingredients= req.body.ingredients;
    updateRecipe.instructions= req.body.instructions;

  jsonfile.writeFile(file, obj, (err) => {
    console.error(err);
    res.render('success');
    });
  });
});

router.get('/success', (req, res) => {
	res.render('success');
})

router.get('/get/:id', (req, res) => {

	jsonfile.readFile(file, (err, obj) => {

	const recipe = obj.recipes.find(c => c.id === parseInt(req.params.id));
	if (!recipe) return res.status(404).send('The recipe with the given ID was not found');
	console.log(recipe);
	res.render('recipe', recipe);

	})
})

router.delete('/delete/:id', (req, res) => {
	//look up the recipe
	//if not existing, return 404

	jsonfile.readFile(file, (err, obj) => {

	const recipe = recipes.find(c => c.id === parseInt(req.params.id));
	if (!recipe) return res.status(404).send('The recipe with the given ID was not found');

	// Delete recipe
	const index = recipes.indexOf(recipe);
	recipes.splice(index, 1);
	// Return the updated recipe
	res.render('recipe');

	})
});



function validateRecipe(recipe) {
	const schema = {
	name: Joi.string().min(3).required()
	};
	return Joi.validate(recipe, schema);
}

module.exports = router;