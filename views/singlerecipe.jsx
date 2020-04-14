const React = require('react');

class Singlerecipe extends React.Component{
    render(){
        // CSS things
        const title = {"textAlign" : "center"};

        const image = {"textAlign" : "center"};

        const foodImage = {
                        "maxHeight" : "200px",
                        "maxWidth" : "400px",
                        "margin" : "20px"
                        };

        const mainContainer = {"margin" : "30px auto"}

        const leftContainer = {"textAlign" : "center"};

        const rightContainer = {"textAlign" : "center"};

        const editRecipeStyle = {"textAlign" : "center",
                                 "margin" : "30px"
                                };

        const deleteRecipeStyle = {"textAlign" : "center"};

        const ingredientListStyle = {"list-style-position" : "inside"}


        // Javascript things
        const recipeObject = this.props.singleRecipe

        const id = this.props.id;

        const recipeImage = <img src={recipeObject.img} style={foodImage}></img>

        const createdDate = <p>Date Created: {recipeObject.createdDate}</p>

        const recipeIngredients = recipeObject.ingredients.map((el, i) => {
            return (
                    <tr>
                      <th scope="row">{i+1}</th>
                      <td>{el.name}</td>
                      <td>{el.amount}</td>
                    </tr>
                    )
        })

        const recipeInstructions = <p>{recipeObject.instructions}</p>

        const deleteRecipe = <form method="POST" action={`/deleterecipe/${id}?_method=delete`}>
                                <input name="id" type="hidden" value={id}></input>
                                <input type="submit" value="delete this"></input>
                            </form>

        return(
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
                </head>
                <nav>
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/allrecipes">All Recipes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">about RecipeList</a>
                        </li>
                    </ul>
                </nav>
                <body>
                    <div>
                        <h1 style={title}>{recipeObject.title}</h1>
                    </div>
                    <div style={image}>
                        {recipeImage}
                        {createdDate}
                    </div>
                    <div className="container" style={mainContainer}>
                        <div className="row">
                            <div className="col-md-6" style={leftContainer}>
                                <h2>Recipe Ingredients</h2>
                                <table class="table">
                                  <thead>
                                    <tr>
                                      <th scope="col">#</th>
                                      <th scope="col">Ingredient</th>
                                      <th scope="col">Amount</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {recipeIngredients}
                                  </tbody>
                                </table>
                            </div>
                            <div className="col-md-6" style={rightContainer}>
                                <h2>Instructions</h2>
                                {recipeInstructions}
                            </div>
                        </div>
                    </div>
                    <div style={editRecipeStyle}>
                        <a href={`/editrecipe/${id}`}>Edit This Recipe</a>
                    </div>
                    <div style={deleteRecipeStyle}>
                        {deleteRecipe}
                    </div>
                </body>
            </html>
        )

    }
}

module.exports = Singlerecipe;