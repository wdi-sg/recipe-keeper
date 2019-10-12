var React = require('react');

class Edit extends React.Component {
    render() {
        let formAction = '/pokemon/' + this.props.id + '?_method=put';
        return (
            <html>
                <body>
                    <h2>Edit Recipe</h2>
                    <form method="PUT" action={formAction}>
                        <h3>Recipe Title:</h3>
                        <input type="text" name="title" value={this.props.title} required/><br/>
                        <h3>Ingredients:</h3>
                        <input type="text" name="ingredients" value={this.props.ingredients} required/><br/>
                        <h3>Instructions:</h3>
                        <input type="text" name="instructions" value={this.props.instructions} required/><br/><br/>
                        <input type="submit" value="Submit"/>
                    </form>
                </body>
            </html>
            );
    }
}

module.exports = Edit;