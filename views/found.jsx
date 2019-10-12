var React = require('react');

class Recipe extends React.Component {
    render() {
        let formEdit = '/recipes/' + this.props.id + '/edit';
        let formDelete = '/recipes/' + this.props.id + '?_method=delete';
        return (
            <html>
                <body>
                    <h2>Recipe {this.props.message}</h2>
                    <h3>Recipe Title:</h3>
                    <p>{this.props.title}</p>
                    <h3>Ingredients:</h3>
                    <p>{this.props.ingredients}</p>
                    <h3>Instructions:</h3>
                    <p>{this.props.instructions}</p>
                    <form method="GET" action={formEdit}>
                        <input type="submit" value="Edit"/>
                    </form>
                    <form method="POST" action={formDelete}>
                        <input type="submit" value="Delete"/>
                    </form>
                </body>
            </html>
        );
    }
}

module.exports = Recipe;