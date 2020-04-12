const React = require('react');
class Edit extends React.Component {
    render () {

        let recipe = this.props;
        const link = "/recipes/" + recipe.id + "?_method=put";

        return (
            <html>
                <body>
                    <form method='POST' action={link}>
                        <h1>Edit Recipe</h1>
                        <h3>Title</h3>
                        <input type='text' name='title' value={recipe.title}/>
                        <h3>Ingredients</h3>
                        <input type='text' name='ingredients' value={recipe.ingredients}/><br/>
                        <h3>Instructions</h3>
                        <input type='text' name='instructions' value={recipe.instructions}/><br/>
                        <input type="submit" name="Submit"/>
                    </form>
                </body>
            </html>
        )
    }
}

module.exports = Edit