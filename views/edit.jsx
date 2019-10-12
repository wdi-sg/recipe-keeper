var React = require('react');

class Edit extends React.Component {
    render() {
        let formAction = '/recipes/' + this.props.recipes.id + '?_method=put';


        return (
            <html>
                <body>
                <h1>Edit Recipe</h1>
                    <form method="POST" action={formAction}>
                        ID: <input type="text" name="id" value={this.props.id} readOnly/><br/>
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

module.exports = Edit;