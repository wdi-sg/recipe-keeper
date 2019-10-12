const React = require('react');

class RecipeList extends React.Component{
    render(){

        let recipeObj = this.props.recipeObj;
        let userRequest = this.props.userRequest;
        console.log(recipeObj)
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>

                </head>
                <body>
                    <h1>Editing: {recipeObj.name}</h1>
                    {/* Redirect you to All Recipe link */}
                    <form action={"/GC/edit/"+recipeObj.name+"?_method=put"} method="POST">
                            <h2>Name: <input type="text" name="name" value={recipeObj.name}/></h2><br/>
                            <br/>
                            Type: <select name="type">
                                <option value="N.Veg">Non Vegeterian</option>
                                <option value="Veg">Vegeterian</option>
                            </select><br/>
                            Ingredients: <input type="text" name="ingredients" value={recipeObj.ingredient}/>
                            <br/>
                            Instruction: <input type="text" name="instructions" value={recipeObj.instruction}/>
                            <br/>
                            <input type="submit"/>
                        </form>
                </body>
            </html>
        )
    }
}

module.exports = RecipeList;