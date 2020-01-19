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
                <form action={actionURL} method="POST" className="w-100">
                    <div className="form-group">
                      <label htmlFor="recipeIndexIndex">Index</label>
                        <input className="form-control" type="text" name="index" id="recipeIndexIndex" defaultValue={this.props.recipeId} readOnly="readOnly"/>
                      </div>
                    <div className="form-group">
                      <label htmlFor="recipeTitleIndex">Title</label>
                        <input type="text" className="form-control" id="recipeTitleIndex" name="title" defaultValue={this.props.recipe.title} required/>
                      </div>
                    <div className="form-group">
                      <label htmlFor="recipeIngredientsIndex">Ingredients</label>
                        <textarea rows="3" className="form-control" id="recipeIngredientsIndex" name="ingredients" defaultValue={this.props.recipe.ingredients} rows="3" required/>
                      </div>
                    <div className="form-group">
                      <label htmlFor="recipeMethodIndex">Method</label>
                        <textarea rows="3" className="form-control" id="recipeMethodIndex" name="method" defaultValue={this.props.recipe.method} rows="3" required/>
                      </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </DefaultLayout>)
    }
}

module.exports = EditRecipe;
