var React = require('react');

class deleteRecipe extends React.Component {
  render() {


    return (
      <html>
        <body>
          <div>
            <h1>Deleting Recipe: {this.props.title}</h1>
            <form method="POST" action={"/recipes/'+recipes+'?_method=delete"}>
                <div class="recipe-attribute">
                  <input type="text" name="title" value={this.props.title}/>
                  <br></br>
                  <input type="text" name="ingredients" value={this.props.ingredients}/>
                  <br></br>
                  <input type="text" name="instructions" value={this.props.instructions}/>
                  <br></br>
                  <input type="submit" value="Submit"/>
                </div>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = deleteRecipe;