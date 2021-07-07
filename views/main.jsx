var React = require('react');
var List = require('./components/listItem.jsx');
var Navbar = require('./components/navbar.jsx');

class Main extends React.Component {
  render() {
    // var url = "/recipes/"+this.props.pokeId + "?_method=PUT";
    // var id = parseInt(this.props.pokey.id);

     var recipes = this.props.recipesList.map(recipe =>{
        return <List food={recipe}/>
    })

    return (
      <html>
        <head>
        <link href="https://fonts.googleapis.com/css?family=Didact+Gothic|Satisfy&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" type="text/css" href="/main.css"/>

        </head>
        <body>
            <h1>Mum's Recipes</h1>
            <Navbar/>
            <div className="wrapper">
            {recipes}
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Main;