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