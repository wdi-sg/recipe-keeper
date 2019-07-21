var React = require('react');
//////////////////ALLRECIPEPAGE COMPONENT STUFF//////////////////
class Allrecipepage extends React.Component {

  render() {
    //code logic goes here
    if (this.props.index >= 0){
      var recipeIndex = "/recipes/"+this.props.index;
    }else {
      var recipeIndex = "/ingredients/"+this.props.title;
    }

    return (
      <div id="recipe-item">
        <div>{this.props.splitter}</div>
        <li><a href={recipeIndex}>{this.props.title}</a></li>
      </div>
    );
  }
}


module.exports = Allrecipepage;
