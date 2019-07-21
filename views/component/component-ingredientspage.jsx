var React = require('react');
//////////////////ALLRECIPEPAGE COMPONENT STUFF//////////////////
class Ingredientpage extends React.Component {

  render() {
    //code logic goes here
    var recipeIndex = "/ingredients/"+this.props.name;

    return (
      <div id="recipe-item">
        <div>{this.props.splitter}</div>
        <li><a href={recipeIndex}>{this.props.name}</a></li>
      </div>
    );
  }
}


module.exports = Ingredientpage;
