var React = require('react');
class RecipeInfo extends React.Component {
  render() {
    
    return (
      <div className = "card">
      	<div className = "wrapper">
        	<a href ={"/recipes/" + this.props.id} ><img src={this.props.display.img}/></a>
        </div>
        <h3>{this.props.display.title}</h3>

      </div>   

    )
  };
}
  
module.exports = RecipeInfo;