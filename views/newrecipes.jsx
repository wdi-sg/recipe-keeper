var React = require('react');
class NewRecipes extends React.Component {

  render() {

    return (
    <html>
    <head>
    <link rel="stylesheet" type="text/css" href="/style.css"/>
    </head>
    <body>
      <div>

        <h1>Add a new recipe</h1>
        <form method="POST" action="/recipes">
            <input name = "id" value={this.props.id} placeholder="ID"/> <br/>
            <input name = "title" placeholder="Title"/> <br/>
            <input name = "ingredients" placeholder="Ingredients"/> <br/>
            <input name = "instructions" placeholder="Instructions"/> <br/><br/>
            <input type = "submit"/>
        </form>

      </div>
      </body>
      </html>
    );
  }
}
module.exports = NewRecipes;



