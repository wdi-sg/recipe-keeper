var React = require('react');
class RecipeInfo extends React.Component {
  render() {
    
    return (
      <div>
        <img src={this.props.display.img} />
        <h3>{this.props.display.title}</h3>

      </div>   

    )
  };
}
  
module.exports = RecipeInfo;