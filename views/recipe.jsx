const React = require('react');
const PropTypes = require('prop-types');
const DefaultLayout = require('./layouts/default');
const DateParser = require('./components/dateparser');

class Recipe extends React.Component {
    render() {

      const actionURL = `/recipes/${this.props.recipeId}?_method=delete`;
      const editURL = `/recipes/${this.props.recipeId}/edit`;
      const dateCreated = this.props.recipe.dateCreated;
      const dateUpdated = this.props.recipe.dateUpdated;

        return (
          <DefaultLayout>
            <div>
              <h3>{this.props.message}</h3>
              <h1>{this.props.recipe.title}</h1>
              <small className="text-muted">Date Created: <DateParser date={dateCreated}/> - Last Updated: <DateParser date={dateUpdated}/></small>
              <h3>Ingredients:</h3>
              <p>{this.props.recipe.ingredients}</p>
              <h3>Method:</h3>
              <p>{this.props.recipe.method}</p>
              <a href={editURL} type="button" className="btn btn-primary">
                Edit this recipe
              </a>
              <span> </span>
              <a href={actionURL} type="button" className="btn btn-danger">
                Delete this recipe
              </a>
            </div>
        </DefaultLayout>
        );
    }
};

module.exports = Recipe;
