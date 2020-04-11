var React = require('react');
class Edit extends React.Component {
  render() {
    let currentId = this.props.currentId;
    let putLink = "/recipes/" + currentId + "?_method=put";
    return (
      <html>
        <body>
          <div>
            <form method="POST" action={putLink}>
                <div>
                  Title:
                  <input type="text" name="title" value={this.props.currentRecipe.title}></input>
                </div>
                <div>
                  Ingredients:
                  <input type="text" name="ingredients" value={this.props.currentRecipe.ingredients}></input>
                </div>
                <div>
                  Instructions:
                  <input type="text" name="instructions" value={this.props.currentRecipe.instructions}></input>
                </div>
                <div>
                  <input type="submit" value="submit"></input>
                </div>
              </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Edit;