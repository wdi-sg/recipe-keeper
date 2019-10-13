const React = require("react");

class Recipe extends React.Component {
  render() {
    return (
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src="https://www.seriouseats.com/images/2013/08/20130624-257009-chicken-rice-set-edit.jpg"
              className="card-img p-2"
              alt={this.props.recipe.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-primary">
              <a href={"/recipes/" + this.props.recipeId}>{this.props.recipe.title}</a>
              </h5>
              <h6>ingredients</h6>
              {this.props.recipe.ingredients.map(ingredient => (
                <ul className="list-group list-group-flush text-secondary">
                  <li className="list-group-item">
                    <input className="form-check-input" type="checkbox" value="" />
                    {ingredient.name}, {ingredient.amount}, {ingredient.notes}
                  </li>
                </ul>
              ))}
              <h6 className="mt-2">instructions</h6>
              <p className="card-text text-secondary">{this.props.recipe.instructions}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Recipe;
