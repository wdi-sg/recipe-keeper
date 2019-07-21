var React = require('react');
class RecipeInfo extends React.Component {
  render() {
    
    return (
      <div className = "card">
      	<div className = "wrapper">
        	<img src={this.props.display.img} />
        </div>
        <h3>{this.props.display.title}</h3>

      </div>   

    )
  };
}
  
module.exports = RecipeInfo;