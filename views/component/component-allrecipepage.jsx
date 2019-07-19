var React = require('react');
//////////////////ALLRECIPEPAGE COMPONENT STUFF//////////////////
class Allrecipepage extends React.Component {

  render() {
    //code logic goes here
    var recipeIndex = "/recipes/"+this.props.index;

    return (
      <div>
        <li><a href={recipeIndex}>{this.props.title}</a></li>
      </div>
    );
  }
}


module.exports = Allrecipepage;
