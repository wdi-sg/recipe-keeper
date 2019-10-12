const React = require('react');

class Recipe extends React.Component{
    render(){

        let title = this.props.recipe.title
        let ingredients = this.props.recipe.ingredients
        let instructions = this.props.recipe.instructions


        return(
            <html>
                <body>
                  <div>
                        <h1>Title: {title}</h1>
                        <h2>Ingredients: {ingredients}</h2>
                        <h2>Instructions: {instructions}</h2>
                  </div>

                   <form action={"/recipes/" + this.props.recipe.id + "/edit"} method="get" id="edit">
                         <button type = "reload">
                            Edit recipe
                        </button>
                    </form>

                    <form action="/recipes" method="get" id="home">
                         <button type = "reload">
                            Back to homepage
                        </button>
                    </form>

                    <form action={"/recipes/"+ this.props.recipe.id + "?_method=delete"} method="post">
                         <button type="submit">
                            Delete this recipe
                        </button>
                    </form>
                </body>
              </html>
            )
    }
}
module.exports = Recipe