const React = require('react');

class Editrecipe extends React.Component {

    render(){
        // CSS things
        const title = {"textAlign" : "center"};

        const form = {"display" : "flex",
                      "flexDirection" : "column",
                      "alignItems" : "center"
                     };

        const createRecipeForm = {"marginTop" : "5px",
                                  "width" : "400px"
                                };

        // Javascript things

        const singleRecipe = this.props.data[0].singleRecipe;

        const id = this.props.data[1].id

        const editRecipe =<div>
                         <form action={`/editarecipe/${id}?_method=put`} method="post" style={form}>
                            <input type="text" name="title" placeholder={`${singleRecipe.title}`} style={createRecipeForm}></input>
                            <input type="text" name="ingredients" placeholder={`${singleRecipe.ingredients[0]}`} style={createRecipeForm}></input>
                            <input type="text" name="ingredients" placeholder={`${singleRecipe.ingredients[1]}`} style={createRecipeForm}></input>
                            <input type="text" name="ingredients" placeholder={`${singleRecipe.ingredients[2]}`} style={createRecipeForm}></input>
                            <input type="text" name="instructions" placeholder={`${singleRecipe.instructions}`} style={createRecipeForm}></input>
                            <input type="text" name="img" placeholder="image link" style={createRecipeForm}></input><br></br>
                            <input type="submit" value="Submit" style={createRecipeForm}></input>
                         </form>
                    </div>


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
                        <h1 style={title}>Edit Recipe</h1>
                    </div>
                    <div>
                        {editRecipe}
                    </div>
                </body>
            </html>

        )
    }
}

module.exports = Editrecipe