var React = require('react');

class NewRecipe extends React.Component {
    clicked(){
        console.log("clicked!");
    }

  render() {
    let formAction; //where does the form go?
    return (
        <html>
        <head>
            <title>Angrylobster's Recipe Collection</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
            <link rel="stylesheet" type="text/css" href="/style.css"/>
        </head>
        <header>

        </header>

        <body>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
            <script type="text/javascript" src="/script.js"/>

            <form method="POST" action="/recipes">
                <label id="recipe-name-label">Recipe Name</label>
                <div className="form-group">
                    <textarea name="recipe-name" className="form-control" id="recipe-name" rows="1"></textarea>
                </div>

                <label id="description-label">Description</label>
                <div className="form-group">
                    <textarea name="description" className="form-control" id="description" rows="3"></textarea>
                </div>

                <label>Ingredients</label>
                <div className="input-group mb-3 ingredients-wrapper">
                    <input type="text" name="ingredients" className="form-control" placeholder="Type an ingredient" aria-label="Recipe ingredient" aria-describedby="basic-addon2"/>
                    <div className="input-group-append ingredient-add-wrapper">
                        <button className="btn btn-outline-secondary ingredient-add" type="button">+</button>
                    </div>
                    <div className="input-group-append ingredient-remove-wrapper">
                        <button className="btn btn-outline-secondary ingredient-remove" type="button">-</button>
                    </div>
                </div>

                <label id="cooking-instructions-label">Cooking Instructions</label>
                <div className="input-group mb-3 instructions-wrapper">
                    <input type="text" name="instructions" className="form-control cooking-instruction" placeholder="Type a cooking instruction" aria-label="Cooking instruction" aria-describedby="basic-addon2"/>
                    <div className="input-group-append instruction-add-wrapper">
                        <button className="btn btn-outline-secondary instruction-add" type="button">+</button>
                    </div>
                    <div className="input-group-append instruction-remove-wrapper">
                        <button className="btn btn-outline-secondary instruction-remove" type="button">-</button>
                    </div>
                </div>
                
                <input type="submit" value="Submit Recipe" id="submit-button"/>
            </form>
        </body>
        </html>
    )
  }
}

module.exports = NewRecipe;