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
         <div className="container mt-4 text-center">
         <h1 className="display-2 ">{this.props.updateRecipe.name} Recipe Edited</h1>
           
           <h4>Ingredients</h4>
           <p>{this.props.updateRecipe.ingredients}</p>
           <h4>Instructions</h4>
           <p>{this.props.updateRecipe.instructions}</p>

           <button className="btn btn-primary btn-lg"><a className="text-white" href="/home">Back to Home</a></button>
         </div>
         
           
       </body>
       <Script/>
      </html>
    );
  }
}

module.exports = Edited;