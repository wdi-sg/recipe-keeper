const React = require("React");

class View extends React.Component {
    render() {
        let {title, ingredients, instructions, id} = this.props;

        return (
            <div>
                <h1>{title}</h1>
                <p>Ingredients: {ingredients}</p>
                <p>Instructions: {instructions}</p>
                <form method="POST" action={`/recipes/${id}?_method=delete`}>
                <input type="submit" value="delete"/>
                </form>
            </div>
        )
    }
}

module.exports = View;