const React = require('react');

class Home extends React.Component {

    render() {
        // styling purposes
        const title = {"textAlign" : "center"};

        const recipeListTitle = {"textAlign" : "center"};

        const recipeList = {"display" : "flex",
                            "flexDirection" : "row",
                            "flexWrap" : "wrap",
                            "justifyContent" : "space-between"
                            };

        const createRecipeForm = {"marginTop" : "5px",
                                 };

        // javascript purposes
        const recipeTitles = this.props.recipeTitleArray.map((el, i) => {
            return <p><a href={`./singlerecipe/${i}`}>{el}</a></p>
        })

        /*
        Unable to get function to work on button to add fields for ingredients. Onclick function not working

        const addIngredients = (e) => {
            console.log('hello hello')

            return (
            <input type="text" name="ingredients" placeholder="Ingredients" style={createRecipeForm}></input>
            );

        }

        const addIngredientsBtn =
                 <button type="button" onClick={addIngredients}>
                 Add Ingredients
                 </button>
        */


        const createRecipe =<div>
                                 <form action="/createarecipe" method="post">
                                    <input type="text" name="title" placeholder="Recipe Title" style={createRecipeForm}></input>
                                    <input type="text" name="ingredients" placeholder="Ingredients" style={createRecipeForm}></input>
                                    <input type="text" name="ingredients" placeholder="Ingredients" style={createRecipeForm}></input>
                                    <input type="text" name="ingredients" placeholder="Ingredients" style={createRecipeForm}></input>
                                    <input type="text" name="instructions" placeholder="Instructions" style={createRecipeForm}></input>
                                    <input type="text" name="img" placeholder="image link" style={createRecipeForm}></input><br></br>
                                    <input type="submit" value="Submit" style={createRecipeForm}></input>
                                 </form>
                            </div>

        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
                </head>
                <body>
                    <div>
                        <h1 style={title}>Recipe Keeper</h1>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h2 style={recipeListTitle}>List of Recipes</h2>
                                <div style={recipeList}>
                                    {recipeTitles}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h2>Create A Recipe</h2>
                                {createRecipe}
                            </div>
                        </div>
                    </div>
                </body>
            </html>

        )
    }

}

module.exports = Home;