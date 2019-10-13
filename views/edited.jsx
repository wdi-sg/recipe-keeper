var React = require('react');
const Nav = require("./navbar.jsx");
const Script = require("./script");
class Edited extends React.Component {
  render() {
    return (
      <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        </head>
       <body>
         <Nav/>
           <h1>Recipe Edited</h1>
           <h3>{this.props.updateRecipe.name}</h3>
           <h4>Ingredients</h4>
           <il>{this.props.updateRecipe.ingredients}</il>
           <h4>Instructions</h4>
           <li>{this.props.updateRecipe.instructions}</li>

           <button><a href="/home">Back to Home</a></button>
           
       </body>
       <Script/>
      </html>
    );
  }
}

module.exports = Edited;