const React = require('react');

class AddRecipe extends React.Component{
    render(){
        // let recipeObj = this.props.recipeObj;
        // let recipeP = recipeObj.map(value1 =>{
        //     return <RecipeFunction key1={value1}/>
        // })

        return(
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>

                </head>
                <body>
                    <h1>Add new recipe</h1>
                    {/* Redirect you to All Recipe link */}
                    <form method="POST" action="/GC/add">
                        Name: <input type="text" name="name"/><br/>

                        Type: <select name="type">
                            <option value="N.Veg">Non Vegeterian</option>
                            <option value="Veg">Vegeterian</option>
                        </select><br/>
                        Ingredients: <input type="text" name="ingredients"/><br/>
                        Instructions: <input type="text" name="instructions"/><br/>
                        <input type="submit"/>
                    </form>
                </body>
            </html>
        )
    }
}

module.exports = AddRecipe;