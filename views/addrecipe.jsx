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
                      <label htmlFor="recipetitleindex">Title:</label>
                      <input className="form-control" type="text" name="title" id="recipetitleindex"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="recipeingredientsindex">Ingredients:</label>
                      <textarea className="form-control" name="ingredients" rows="3" id="recipeingredientsindex"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="recipemethodindex">Method:</label>
                      <textarea className="form-control" name="method" rows="3" id="recipemethodindex"/>
                    </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
        </DefaultLayout>)
    }
}

module.exports = AddRecipe;
