const React = require('react');
const PropTypes = require('prop-types');
const DefaultLayout = require('./layouts/default');

class EditRecipe extends React.Component {

    render() {

        const actionURL = `/recipes/${this.props.recipeId}?_method=put`;
        // action="/pokemon/'+pokemon.id+'?_method=delete"
        return (<DefaultLayout>
            <div>
                <h1>Edit Recipe</h1>
                <form action={actionURL} method="POST">
                    <p>Index:
                        <input type="text" name="index" defaultValue={this.props.recipeId} readOnly="readOnly"/></p>
                    <p>Title:
                        <input type="text" name="title" defaultValue={this.props.recipe.title}/></p>
                    <p>Ingredients:
                        <input type="textarea" name="ingredients" defaultValue={this.props.recipe.ingredients} rows="3"/></p>
                    <p>Method:
                        <input type="textarea" name="method" defaultValue={this.props.recipe.method} rows="3"/></p>
                    <input type="submit"/>
                </form>
            </div>
        </DefaultLayout>)
    }
}

module.exports = EditRecipe;
