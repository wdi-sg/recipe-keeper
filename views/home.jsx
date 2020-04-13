const React = require('react');

class Home extends React.Component {

    render() {
        /////////////////////////////////////// styling purposes
        const title = {"textAlign" : "center"};

        const recipeListTitle = {"textAlign" : "center"};

        const recipeList = {"display" : "flex",
                            "flexDirection" : "row",
                            "flexWrap" : "wrap",
                            "justifyContent" : "space-between"
                            };

        const createRecipeForm = {"marginTop" : "5px",
                                 };

        const ingredientsAmt = {"width" : "50px"}

        const foodDiv = {
                        "height" : "130px",
                        "width" : "191px",
                        "margin" : "30px 20px"
                        }

        const foodImage = {
                            "height" : "130px",
                            "width" : "191px",
                        };

        const foodTitle = {
                            "textAlign" : "center"
                          };


        //////////////////////////////////// javascript purposes

        const recipeImages = this.props.data[1].recipeImageArray;

        const recipeTitles = this.props.data[0].recipeTitleArray.map((el, i) => {
            while (i < 9){
                return (
                    <div style={foodDiv}>
                        <img src={`${recipeImages[i]}`} style={foodImage}></img><br></br>
                        <a href={`./singlerecipe/${i}`} style={foodTitle}>{el}</a>
                    </div>
                )
            }
        })


        // Unable to get function to work on button to add fields for ingredients. Onclick function not working

        // function addIngredients() {
        //     console.log('hello hello');

        //     return (
        //             <div>
        //                 <input type="text" name="ingredients" placeholder="Ingredients" style={createRecipeForm}></input>
        //                 <input type="number" name="amount" placeholder="Amt" style={ingredientsAmt}></input>
        //             </div>
        //            )

        // }

        // const addIngredientsBtn =
        //          <button type="button" onClick={addIngredients}>
        //          Add Ingredients
        //          </button>



        const createRecipe =<div>
                                 <form action="/createarecipe" method="post">
                                    <input type="text" name="title" placeholder="Recipe Title" style={createRecipeForm}></input><br></br>

                                    <input type="text" name="ingredients" placeholder="Ingredients" style={createRecipeForm}></input><input type="number" name="amount" placeholder="Amt" style={ingredientsAmt}></input><br></br>

                                    <input type="text" name="ingredients" placeholder="Ingredients" style={createRecipeForm}></input><input type="number" name="amount" placeholder="Amt" style={ingredientsAmt}></input><br></br>

                                    <input type="text" name="ingredients" placeholder="Ingredients" style={createRecipeForm}></input><input type="number" name="amount" placeholder="Amt" style={ingredientsAmt}></input><br></br>

                                    <input type="text" name="instructions" placeholder="Instructions" style={createRecipeForm}></input><br></br>

                                    <input type="text" name="img" placeholder="image link" style={createRecipeForm}></input><br></br>

                                    <input type="submit" value="Submit" style={createRecipeForm}></input>
                                 </form>
                            </div>

        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
                </head>
                <nav>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/allrecipes">All Recipes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">about RecipeList</a>
                        </li>
                    </ul>
                </nav>
                <body>
                    <div>
                        <h1 style={title}>Recipe Keeper</h1>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h2 style={recipeListTitle}>List of Recipes</h2>
                                <div style={recipeList} className="container">
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