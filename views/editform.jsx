var React = require('react');

class Editform extends React.Component {
  render() {

    return (
      <html>
        <body>
          <div>
            <h1>Edit your recipe!</h1>
            <form method="POST" action={"/allrecipes/"+this.props.id+"?_method=put"}>
              Recipe info:<br/>
              <p>id</p>
              <input type="text" name="id" value={this.props.id}/><br/>
              <p>Recipe Title:</p>
              <input type="text" name="name" value={this.props.title}/><br/>
              <p>Ingredients:</p>
              <input type="text" name="height" value={this.props.ingredients}/><br/>
              <p>Instructions</p>
              <input type="text" name="weight" value={this.props.instructions}/><br/>
              <p>
              <input type="submit" value="submit"/>
              </p>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Editform;