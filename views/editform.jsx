const React = require('react');

class Edit extends React.Component{
    render(){
        const {
        title,
        ingredients,
        instructions
        } = this.props.recipe


        return(
            <html>

                <body>
                  <div>
                    <h1>Edit recipe!</h1>
                    <form action={"/recipes/"+ this.props.recipe.id + "?_method=put"} method="post" id="edit">
                      <div>
                        <label htmlFor="title">Title:  </label>
                        <input type="text" name="title" defaultValue = {title}/>
                      </div>
                      <div>
                        <label htmlFor="ingredients">Ingredients:  </label>
                        <input type="text" name="ingredients" defaultValue = {ingredients}/>
                      </div>
                      <div>
                        <label htmlFor="instructions">Instructions:  </label>
                        <input type="text" name="instructions" defaultValue = {instructions}/>
                      </div>
                    </form>
                    <button type="submit" form="edit" value="edit">
                        Edit entry
                    </button>
                  </div>
                </body>
              </html>
            )
    }
}
module.exports = Edit