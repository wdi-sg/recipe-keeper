const React = require('react');

class Edit extends React.Component {
    render () {

        let {title, ingredients, instructions, id} = this.props;

        return (
            <div>
                <h1>{title}</h1>
                <h2>Ingredients: {ingredients}<br/>
                    Instructions: {instructions}<br/></h2><br/>
                <form method = "POST" action = {`/recipes/${id}?_method=put`}>
                    <h1>Edit Recipe</h1>
                    Recipe Ingredients: <input type="text" name = "ingredients"/>
                    <br/>
                    Recipe Instructions: <input type="text" name = "instructions"/>
                    <br/>
                    <input type = "submit" value = "submit"/>
                </form>
            </div>
        )
    }
}

module.exports = Edit;