var React = require('react');

class NewRecipe extends React.Component {
    render() {
        return (
            <html>
                <body>
                    <div>
                        <form method="POST" action="/recipes">
                            <h1>New Recipe </h1>
                            Recipe Title: <input type="text" name="title" />
                            Ingredients: <input type="text" name="ingredients" />
                            Instructions: <input type="text" name="instructions" />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </body>
            </html>
            );
    }
}

module.exports = NewRecipe;