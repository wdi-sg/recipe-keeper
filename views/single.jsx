var React = require('react');
const Template = require('./template.jsx');


class Single extends React.Component {
  render() {
    var url = "/recipes/"+this.props.recipe.id + "?_method=PUT";
    var editUrl = "/recipes/"+this.props.recipe.id +"/edit/";
    var deleteUrl = "/recipes/"+this.props.recipe.id +"/delete/";
    var message = "";

    if (this.props.createdSuccess === true){
      message = <div className="feedback">This recipe is created.</div>;
    } else {
      message = "";
    }

    if (this.props.updatedSuccess === true){
      message = <div className="feedback">This recipe is updated.</div>;
    } else {
      message = "";
    }

    return (
      <Template>
        <div className="container">
          <div className="row">
            <a className="button" href="/recipes">Back to list</a>
          </div>
          <div className="row">
            {message}
          </div>

          <div className="row">
            <div className = "two columns"><a className="button button-primary" href={editUrl}>Edit Recipe</a></div>
            <div className = "two columns"><a className="button button-primary" href={deleteUrl}>Delete Recipe</a></div>
          </div>
          
          <div className="row">
            <h2>{this.props.recipe.title}</h2>
          </div>
          <div className="row">
            <div className = "six columns">
              <img className="u-max-full-width" src={this.props.recipe.image}></img>
            </div>
            <div className = "six columns">
              <h3>Ingredients</h3>
              <p>{this.props.recipe.ingredients}</p>
              <h3>Instructions</h3>
              <p>{this.props.recipe.instructions}</p>
            </div>
          </div>

        </div>

        </Template>
    );
  }
}

module.exports = Single;
