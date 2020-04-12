var React = require('react');

class NewRecipe extends React.Component {
    render() {
        return (
            <html>
                <body>
                    <div>
                        <form method="POST" action="/recipes">
                            <h1>New Recipe </h1>
                            <br />
                            ID: <input type="text" name="id" value={this.props.id} readOnly />
                            <br />
                            Recipe Title: <input type="text" name="title" />
                            <br />
                            Ingredients: <input type="text" name="ingredients" />
                            <br />
                            Instructions: <input type="text" name="instructions" />
                            <br />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </body>
            </html>
            );
    }
}

module.exports = NewRecipe;