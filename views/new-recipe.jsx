const React = require('react');

class NewRecipe extends React.Component {
    render() {

        return(
            <html>
             <body>
                <div>
                    <h1>New Recipes Registration</h1>
                    <form action="/recipes" method="post" id="new">
                        <div>
                            <label htmlFor="ID">ID: </label>
                            <input type="number" readOnly={true} defaultValue={this.props.id} name="id" />
                        </div>
                        <div>
                            <label htmlFor="Title">Title: </label>
                            <input type="text" name="Title" />
                        </div>
                        <div>
                            <label htmlFor="Ingredients">Ingredients: </label>
                            <input type="text" name="Ingredients" />
                        </div>
                        <div>
                            <label htmlFor="Instructions">Instructions: </label>
                            <input type="text" name="Instructions" />
                        </div>
                    </form>
                    <button type="submit" form="new" value="submit">
                        Submit
                    </button>
                </div>
             </body>
            </html>
            )}
    }



module.exports = NewRecipe;