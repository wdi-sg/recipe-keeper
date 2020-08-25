const React = require('react');

class Recipe extends React.Component {
    render () {

        let {title, ingredients, instructions, id} = this.props;

        return (
            <div>
                <h1>{title}</h1>
                <h2>Ingredients: {ingredients}<br/>
                    Instructions: {instructions}<br/></h2><br/>
                <form method = "POST" action = {`/recipes/${id}?_method=delete`}>
                    <input type = "submit" value = "delete"/>
                </form>
            </div>
        )
    }
}

module.exports = Recipe;