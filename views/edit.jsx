var React = require('react');

class Edit extends React.Component {

    render() {

        let putAction = `/recipes/${this.props.id}?_method=PUT`;

        return (
            <body>
                <h1>Edit Recipe</h1>
                    <form method="POST" action={putAction}>
                        Recipe Title:
                            <input name="recipeTitle" type="text" value={this.props.recipeTitle}/><br/>
                        Ingredients: <br/>
                            <textarea name="ingredients" cols="40" rows="10" value={this.props.ingredients}></textarea><br/>
                        Instructions: <br/>
                            <textarea name="instructions" cols="40" rows="10" value={this.props.instructions}></textarea><br/>
                        <input type="submit" value="Edit"/>
                    </form>
            </body>
        );
    }
}

module.exports = Edit;