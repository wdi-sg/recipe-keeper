const React = require('react');
const Nav = require('./nav.jsx');
class Edit extends React.Component {
  render() {
    console.log(this.props.recipe)
    return(
      <html>
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
          <link rel="stylesheet" href="/style.css"></link>
        </head>
        <body>
          <Nav/>
          <h1>Editing : {this.props.recipe.title}</h1>
          <form action={"/recipes/" + this.props.id + "?_method=PUT"} method="POST">
          <div class="card">
            <div class="card-body">
              <p>Title:</p>
              <input type="text" name="title" defaultValue={this.props.recipe.title}/><br/><br/>
              <p>Ingredients:</p> 
              <input type="text" name="ingredients" defaultValue={this.props.recipe.ingredients}/><br/><br/>
              <p>Instructions:</p> 
              <input type="text" name="instructions" defaultValue={this.props.recipe.instructions}/><br/><br/>
              <input type="submit" value="Edit Recipe"/>
            </div>
          </div>
          </form>
        </body>
      </html>
    )
  }
}

module.exports = Edit;