var React = require('react');

class deleteRecipe extends React.Component {
  render() {


    return (
      <html>
        <body>
          <div>
            <h1>Deleting Recipe: {this.props.title}</h1>
            
                <div class="recipe-attribute">
                  <h4>Title:</h4>
                  <p>{this.props.title}</p>
                  <br></br>
                  <h4>Ingredients: </h4>
                  <p>{this.props.ingredients}</p>
                  <br></br>
                  <h4>Steps: </h4>
                  
                  <p>{this.props.instructions}</p>
                  <br></br>
                  
                </div>
            <form method="POST" action={"/recipes/'+recipes+'?_method=delete"}>
              <input type="submit" value="Confirm Deletion?"/>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = deleteRecipe;