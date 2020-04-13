var React = require('react');
class Home extends React.Component {
  render() {
    console.log("////");
    console.log("Render is working !!");
    console.log("////");
    console.log(this.props);
    let id = this.props.id;
    let recipeArray = this.props.recipe;
    let resultRecipe = recipeArray[id];
    console.log(recipeArray[id]);

    return (
      <html>
        <body>
          <div>
            <h1>This page is displaying Id number : {id}</h1>
            <p>The recipe is : {resultRecipe}</p>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;