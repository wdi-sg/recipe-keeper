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
            <div className="col-xs-12">
              <a className="link" href="/recipes">Back to list</a>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
            {message}
            </div>
          </div>


          <div className="recipe">
            <div className="row">
              <div className = "col-xs-12 col-sm-12 col-md-6 hero">
                <img src={this.props.recipe.image}></img>
              </div>
              <div className = "col-xs-12 col-sm-12 col-md-6 content">
                <h1>{this.props.recipe.title}</h1>
                <h2>Ingredients</h2>
                <p>{this.props.recipe.ingredients}</p>
                <h2>Instructions</h2>
                <p>{this.props.recipe.instructions}</p>
                <p>Cooking Time: {this.props.recipe.cookingTime}</p>
                <div className="row buttons">
                  <div className = "col-xs-12 col-sm-12 col-md-12 right">
                      <a className="button" href={editUrl}>Edit Recipe</a>
                      <a className="button" href={deleteUrl}>Delete Recipe</a>
                  </div>
                </div>
              </div>
              </div>
            </div>
        </div>



        </Template>
    );
  }
}

module.exports = Single;
