var React = require('react');

class IndividualRecipe extends React.Component {
  render() {
  
    return (
      <html>
       <body>
           <h1>{this.props.name}</h1>
          <h3>Ingredients:</h3>
           <p>{this.props.ingredients}</p>
           <h3>Instructions:</h3>
           <p>{this.props.instructions}</p>
          
          <button ><a href={"/" + this.props.name + "/edit"}>Edit</a></button>
          <button ><a href={"/" + this.props.name + "/delete"}>Delete</a></button>
       </body>
      </html>
    );
  }
}

module.exports = IndividualRecipe;