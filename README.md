# recipe-keeper
Create an online recipe keeper.

![https://media.giphy.com/media/DZQuf6L7aNsaI/giphy.gif](https://media.giphy.com/media/DZQuf6L7aNsaI/giphy.gif)

This will be an express CRUD app.

Users will be able to:

- Add a new recipe.

- See all the recipes that exist.

- Edit recipes that currently exist.

- Delete recipes.

A single page should have at least 3 pieces of information:

1. Title
2. Ingredients
3. Instructions

```
Recipe Title: Boiled Chicken

Ingredients:
  1 chicken
  10 ml water
  
Instructions:
  Place chicken in water with salt. Simmer for 20 minutes.
```

#### Technical Requirements:
- Use express to handle the incoming HTTP requests.

- Use React.js to render HTML after a request.

- Use jsonfile to store your data on the hard disk.

- Use RESTful route structure for the recipes

| **URL** | **HTTP Verb** |  **Action** | **Purpose**  |
|------------|-------------|------------|------------|
| /recipes/         | GET       | index    | See all the recipes |
| /recipes/new      | GET       | new      | Display the form for a single recipe |
| /recipes          | POST      | create   | Create a new recipe |
| /recipes/:id      | GET       | show     | See a single recipe |
| /recipes/:id/edit | GET       | edit     | Display the form for editing a single recipe | 
| /recipes/:id      | PATCH/PUT | update   | Update a recipe |
| /recipes/:id      | DELETE    | destroy  | Remove a recipe |

#### How to get started
Begin building your app with the json file. The starter code inside of data.json should look something like this: 
```
{
  "recipes":[]
}
```

Begin with building the ability to render the form to create a recipe.

Then build the route that accepts the POST request that form creates.

Then build the page that will display a single recipe.

Then build the form for editing a recipe.

Then build the route that accepts the PUT request to update a recipe.

Next is DELETE

That's it!

---

Don't forget to `npm init`.

Here is a minimal list of the things you will need to install in your app:
```
express
jsonfile
method-override
express-react-views
react
react-dom
```

Here's all of the basic bolierplate setup you'll need to do for your app at the top of `index.js`:

```javascript
const jsonfile = require('jsonfile');

const file = 'data.json';

const express = require('express');

const app = express();

app.use(express.static(__dirname+'/public/'));

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

const methodOverride = require('method-override')

app.use(methodOverride('_method'));

const reactEngine = require('express-react-views').createEngine();

app.engine('jsx', reactEngine);

app.set('views', __dirname + '/views');

app.set('view engine', 'jsx');

```

**Hint** It's implied that the ID mentioned in the RESTful routes is the index of the recipe array.

This is the simplest way to code the app. If you code the array index to stand in for the ID, don't put the ID in the recipe object as well, or let the user enter the ID as an input in the form.

The recipe object should look something like this:

```json
{
  "title": "boiled duck",
  "ingredients" : "1 duck, water",
  "instructions": "boil duck in water for 20 minutes. take it out. serve."
}
```

#### Further
Add a way for users to navigate around the site without typing the explicit routes in the browser URL bar.

#### Further
Add some CSS, you can also use bootstrap.
(don't try to add bootstrap or any react CSS as an NPM library- just include the link tag line in the HTML, and a static style css file in the public directory)

```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
```

#### Further
Add more data to your recipe: add the date when it was created.

#### Further
Validate the user's input. Create limits for how long or short any field should be. 

#### Further
Create a system where the app actually tracks a kind of ID. This ID is unique to each recipe. The easiest implementation of this is simply a system that increments from the highest number. If a recipe is removed then the app ignores that ID.

#### Further
Sort the recipes on the index page. You can choose what dimension to sort them by.

#### Further
Add a more complex system of ingredients. For each recipe the ingredients are a variable number of ingredient records. To keep this simple you can start with 1-6 ingredients.

An ingredient record would look like this:

(extracted from the recipe object it is inside)
```json
"ingredients" :[
  { 
    "name" : "chicken",
    "amount" : "1",
    "notes" : "de-boned"
  },
  { 
    "name" : "water",
    "amount" : "1ml",
    "notes" : "isotonic"
  }
]
```

#### Further
Add a route `/ingredients` that lists every ingredient used by every recipe. Each one should be a link to the recipe that uses it.

#### Further
Format the list of ingredients to list the recipes that use that ingredient underneath it.

```
# Chicken
  - chicken rice
  - chicken and orzo
  - chicken bee hoon
  - mc spicy
```


#### Further
Create a system that restricts the user from which ingredients they can use when creating a recipe. Incorporate ingredient json data into the `data.json` that you already have:

```json
{
  "ingredients" : [...],
  "recipes":[]
}
```

When creating a new recipe, let the user pick from those ingredients.
