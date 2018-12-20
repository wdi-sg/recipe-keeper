# recipe-keeper
Create an online recipie keeper.

![https://media.giphy.com/media/DZQuf6L7aNsaI/giphy.gif](https://media.giphy.com/media/DZQuf6L7aNsaI/giphy.gif)

This will be an express CRUD app.

Users will be able to:

- Add a new recipie.

- See all the recipies that exist.

- Edit recipies that currently exist.

- Delete recipies.

A single page should have at least 3 pieces of information:

1. Title
2. Ingredients
3. Instructions

```
Recipie Title: Boiled Chicken

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
| /recipes/new      | GET       | new      | Display the form for a single recipie |
| /recipes          | POST      | create   | Create a new recipie |
| /recipes/:id      | GET       | show     | See a single recipie |
| /recipes/:id/edit | GET       | edit     | Display the form for editing a single recipie | 
| /recipes/:id      | PATCH/PUT | update   | Update a recipie |
| /recipes/:id      | DELETE    | destroy  | Remove a recipie |

#### How to get started
Begin building your app with the json file. The starter code inside of data.json should look something like this: 
```
{
  "recipies":[]
}
```

Begin with building the ability to render the form to create a recipie.

Then build the route that accepts the POST request that form creates.

Then build the page that will display a single recipie.

Then build the form for editing a recipie.

Then build the route that accepts the PUT request to update a recipie.

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

```
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

**Hint** It's implied that the ID mentioned in the RESTful routes is the index of the recipie array.

This is the simplest way to code the app. If you code the array index to stand in for the ID, don't put the ID in the recipie object as well, or let the user enter the ID as an input in the form.

The recipie object should look something like this:

```
{
  "title": "boiled duck",
  "ingredients" : "1 duck, water",
  "instructions": "boil duck in water for 20 minutes. take it out. serve."
}
```

#### Further
Link all of the pages of your app together.

#### Further
Add some CSS, you can also use bootstrap.
(don't try to add bootstrap or any react CSS as an NPM library- just include the link tag line in the HTML, and a static style css file in the public directory)

#### Further
Add more data to your recipie: add the date when it was created.

#### Further
Validate the user's input. Create limits for how long or short any field should be. 

#### Further
Create a system where the app actually tracks a kind of ID. This ID is unique to each recipie. The easiest implementation of this is simply a system that increments from the highest number. If a recipie is removed then the app ignores that ID.

#### Further
Sort the recipies on the index page. You can choose what dimension to sort them by.

#### Further
Add a more complex system of ingredients. For each recipie the ingredients are a variable number of ingredient records. To keep this simple you can start with 1-6 ingredients.

An ingredient record would look like this:

(extracted from the recipie object it is inside)
```
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
Add a route `/ingredients` that lists every ingredient used by every recipie. Each one should be a link to the recipie that uses it.

#### Further
Format the list of ingredients to list the recipies that use that ingredient underneath it.

```
# Chicken
  - chicken rice
  - chicken and orzo
  - chicken bee hoon
  - mc spicy
```


#### Further
Create a system that restricts the user from which ingredients they can use when creating a recipie. Incorporate ingredient json data into the `data.json` that you already have:

```
{
  "ingredients" : [...],
  "recipies":[]
}
```

When creating a new recipie, let the user pick from those ingredients.
