const React = require('react');
const PropTypes = require('prop-types');
const DefaultLayout = require('./layouts/default');

class AddRecipe extends React.Component {

    render() {

        return (<DefaultLayout>
            <div>
                <h1>Add Recipe</h1>
                  <form action="/recipes" method="POST" className="w-100">
                    <div className="form-group">
                      <label htmlFor="recipeTitleIndex">Title</label>
                      <input className="form-control" type="text" name="title" id="recipeTitleIndex"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="recipeIngredientsIndex">Ingredients</label>
                      <textarea className="form-control" name="ingredients" rows="3" id="recipeIngredientsIndex"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="recipeMethodIndex">Method</label>
                      <textarea className="form-control" name="method" rows="3" id="recipeMethodIndex"/>
                    </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
        </DefaultLayout>)
    }
}

module.exports = AddRecipe;
