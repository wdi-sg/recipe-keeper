var React = require('react');

class Create extends React.Component {

    render () {
        const recipesArr = this.props.recipes.recipes;
        const getID = recipesArr.length + 1;

        console.log(getID)

        return (
            <html>
                <body>
                <h1>New Recipe</h1>
                    <form method="POST" action="/recipes">
                        ID: <input type="text" name="id" value={getID} readOnly/><br/>
                        Title: <input type="text" name="title" required/><br/>
                        Ingredients: <input type="text" name="ingredients" required/><br/>
                        Instructions: <input type="text" name="instructions" required/><br/>
                        <input type="submit" value="Submit"/>
                    </form>
                </body>
            </html>
        )
    }
}

module.exports = Create;