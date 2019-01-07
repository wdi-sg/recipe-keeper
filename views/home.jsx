var React = require("react");

class Home extends React.Component {
  render() {
    return (
      <html>
        <body>
          {this.props.recipes.map(recipe => {
            return (
              <div>
                <h1>Name:</h1> {recipe.name}
                <h1>Ingredient:</h1>{" "}
                {recipe.ingredients.map(ingredient => {
                  return (
                    <li>
                      {ingredient.amount}x{" "}
                      {
                        this.props.ingredients.filter(function(el) {
                          return el.id == ingredient.id;
                        })[0].name
                      }
                    </li>
                  );
                })}
                <h1>Instruction</h1>{" "}
                {recipe.instructions.map(instruction => {
                  return <li>{instruction}</li>;
                })}
                <hr />
              </div>
            );
          })}
        </body>
      </html>
    );
  }
}
module.exports = Home;
