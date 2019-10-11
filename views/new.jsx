var React = require('react');

class New extends React.Component {
    render() {
        return (
            <html>
                <body>
                    <h2>Add New Recipe</h2>
                    <p>{this.props.message}</p>
                    <form method="POST" action="/recipes/new">
                        <h3>Recipe Title:</h3>
                        <input type="text" name="title" required/><br/>
                        <h3>Ingredients:</h3>
                        <input type="text" name="ingredients"/><br/>
                        <h3>Instructions:</h3>
                        <input type="text" name="instructions" required/><br/><br/>
                        <input type="submit" value="Submit"/>
                    </form>
                </body>
            </html>
            );
    }
}

module.exports = New;